document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "aletianudeepreddy@gmail.com" && password === "anudeep") {
    alert("Login Successful");
    this.reset();
    window.location.href = "login-successful.html";
  } else {
    alert("Invalid credentials. Try again.");
    this.reset();
  }
});
