
    const staffPassword = "brndhnd052";

    const urlParts = window.location.pathname.split("/");
    const code = urlParts[urlParts.length - 1].toUpperCase();
    document.getElementById("promoCode").innerText = code;

    const usedKey = `brandhand_used_${code}`;
    const isUsed = localStorage.getItem(usedKey);

    if (isUsed === "true") {
      document.getElementById("usedMessage").style.display = "block";
      document.getElementById("codeContainer").style.display = "none";
    }

    function checkPassword() {
      const input = document.getElementById("password").value;
      if (input === staffPassword) {
        if (isUsed === "true") {
          document.getElementById("usedMessage").style.display = "block";
        } else {
          document.getElementById("codeContainer").style.display = "block";
        }
      } else {
        alert("Неверный пароль");
      }
    }

    function markUsed() {
      localStorage.setItem(usedKey, "true");
      document.getElementById("promoCode").innerText = "Код использован";
      document.getElementById("usedMessage").style.display = "block";
      document.getElementById("codeContainer").style.display = "none";
    }
  