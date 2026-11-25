

function showLogin() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  document.getElementById("login").scrollIntoView({
    behavior: "smooth"
  });
}

function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!username || !email || !password) {
    message.textContent = "Complete all fields!";
    message.style.color = "#ff5555";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "#ff5555";
    return;
  }

  const account = {
    username: username,
    email: email,
    role: "user",
    displayName: username
  };

  localStorage.setItem(
    "zeroLoveAccount",
    JSON.stringify(account)
  );

  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  message.textContent = "Welcome to ZERO LOVE, " + username + "!";
  message.style.color = "#ff75b7";
}

function logout() {
  localStorage.removeItem("zeroLoveAccount");
  location.reload();
}

function openManagement() {
  window.location.href = "management.html";
}

window.addEventListener("DOMContentLoaded", function() {
  const savedAccount = localStorage.getItem("zeroLoveAccount");

  if (savedAccount) {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  }
});

console.log("❤️ ZERO LOVE loaded!");
console.log("Owner: MR. ZERO");
console.log("Main Management: MC JAY");
