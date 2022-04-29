// const loginBtn = document.getElementById('login-btn');
 const showPasswordIcon= document.getElementById('show-password')
 const togglePassword= document.getElementById('password')

 showPasswordIcon.addEventListener('click' , ()=> {
     if (togglePassword.type === "password") {
       togglePassword.type = "text";
     } else {
       togglePassword.type = "password";
     }
 })

// loginBtn.addEventListener('click', ()=> {
//     alert('you logged in')
// })


function daniel() {
 const email= document.getElementById("email").value;
 const password = document.getElementById("password").value;
 
 if( email==="admin" && password === "admin" )
 {
  alert( "Welcome admin")
 }

else if (email === "user" && password === "user"){
  alert("welcome 😊")
}

else{
  alert("invalid identity")
}

}

