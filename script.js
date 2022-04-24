const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#mobile-nav");

hamburger.addEventListener("click", () => {
  //   if (navLinks.style.display == "none") {
  //     navLinks.style.display = "block";
  //   } else {
  //     navLinks.style.display = "none";
  //   }
  navLinks.classList.toggle("hidden");
});
