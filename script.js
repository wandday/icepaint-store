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

let landingProducts = [
  {
    name: "Ice Blue",
    img: "./img/paintbucketsBlue.png",
    price: 20000,
  },
  {
    name: "Ice Brown",
    img: "./img/paintbucketsCreame.png",
    price: 28000,
  },
  {
    name: "Ice Creame",
    img: "./img/paintbucketsBlue.png",
    price: 24000,
  },
  {
    name: "Ice Orange",
    img: "./img/paintbucketsBlue.png",
    price: 24000,
  },
  {
    name: "Ice Pink",
    img: "./img/paintbucketsBlue.png",
    price: 24000,
  },
  {
    name: "Ice White",
    img: "./img/paintbucketsBlue.png",
    price: 24000,
  },
];

landingProducts.forEach((product) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div
  class="product cursor-pointer lg:w-1/3 flex flex-col items-center mb-4"
>
  <img src="./img/paintbucketsBlue.png" alt="" />
  <h3 class="paintTitle">Ice Blue</h3>
  <h6 class="paint-price">₦20,000</h6>
</div>
  `;

  product.appendChild(div);
});
