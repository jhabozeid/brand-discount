// Edit this to set the staff password
const staffPassword = "brdhnd052"; // <-- You can change this password

// Get the code from the URL (e.g. /BR123X)
const urlParts = window.location.pathname.split("/");
const code = urlParts[urlParts.length - 1].toUpperCase();
document.getElementById("promoCode").innerText = code;

// Check if code is already used in localStorage
if (localStorage.getItem("used_" + code)) {
  document.getElementById("usedMessage").style.display = "block";
  document.querySelector("input").style.display = "none";
  document.querySelector("button").style.display = "none";
}

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === staffPassword) {
    document.getElementById("codeContainer").style.display = "block";
  } else {
    alert("Неверный пароль");
  }
}

function markUsed() {
  localStorage.setItem("used_" + code, "true");
  alert("Код отмечен как использованный.");
  location.reload();
}
