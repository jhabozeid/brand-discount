function generateRandomCode(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Try to load saved code from localStorage
let savedCode = localStorage.getItem("brandhand_discount_code");
const promoCodeEl = document.getElementById("promoCode");
const usedMessageEl = document.getElementById("usedMessage");
const codeContainerEl = document.getElementById("codeContainer");

if (savedCode) {
  const usedKey = `brandhand_used_${savedCode}`;
  const isUsed = localStorage.getItem(usedKey);

  if (isUsed === "true") {
    promoCodeEl.innerText = "Код использован";
    usedMessageEl.style.display = "block";
    codeContainerEl.style.display = "none";
  } else {
    promoCodeEl.innerText = savedCode;
  }
} else {
  // No code saved yet, generate a new one
  const newCode = generateRandomCode();
  localStorage.setItem("brandhand_discount_code", newCode);
  promoCodeEl.innerText = newCode;
}

function markUsed() {
  const code = localStorage.getItem("brandhand_discount_code");
  if (code) {
    localStorage.setItem(`brandhand_used_${code}`, "true");
    promoCodeEl.innerText = "Код использован";
    usedMessageEl.style.display = "block";
    codeContainerEl.style.display = "none";
  }
}
