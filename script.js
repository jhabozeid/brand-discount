// script.js

// Staff password to unlock the discount
const staffPassword = "brndhnd052";

// Get code from URL path
const urlParts = window.location.pathname.split("/");
let code = urlParts[urlParts.length - 1].toUpperCase();

// Fallback if no code is present
if (!code || code === "") {
  code = generateRandomCode(); // Generate a new code if not provided
}

const promoCodeEl = document.getElementById("promoCode");
promoCodeEl.innerText = code;

// Check if code is used
const usedKey = `brandhand_used_${code}`;
const isUsed = localStorage.getItem(usedKey);

if (isUsed === "true") {
  promoCodeEl.innerText = "Код использован";
  document.getElementById("usedMessage").style.display = "block";
  document.getElementById("codeContainer").style.display = "none";
}

// When staff clicks to confirm the code was used
function markUsed() {
  localStorage.setItem(usedKey, "true");
  promoCodeEl.innerText = "Код использован";
  document.getElementById("usedMessage").style.display = "block";
  document.getElementById("codeContainer").style.display = "none";
}

// Utility function to generate a random promo code
function generateRandomCode(length = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
