// const loginBtn = document.getElementById('login-btn');
const showPasswordIcon = document.getElementById("show-password");
const togglePassword = document.getElementById("password");

showPasswordIcon.addEventListener("click", () => {
  if (togglePassword.type === "password") {
    togglePassword.type = "text";
  } else {
    togglePassword.type = "password";
  }
});

// loginBtn.addEventListener('click', ()=> {
//     alert('you logged in')
// })

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "admin") {
    // alert("Welcome admin");
    window.location.href = "http://localhost:5500/admin.html?";
    // } else if (email === "user@gmail.com" && password === "user") {
    //   alert("welcome 😊");
    //   window.location("http://127.0.0.1:5500/admin.html");
  } else {
    alert("invalid identity");
  }
}
