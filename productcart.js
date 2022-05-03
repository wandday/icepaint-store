let product = document.querySelector("#newProduct");
const edit = document.getElementById("editBtn");
const del = document.getElementById("deleteBtn");
const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const tableBody = document.getElementById("productTable");
const productDescDiv = document.getElementById("productDescDiv");
const productName = document.getElementById("productName");
const productPriceRate = document.getElementById("productPriceRate");
const productImg = document.getElementById("productImg");

window.onload = function () {
  localStorage.removeItem("sum");
  if (localStorage.getItem("products")) {
    console.log("yepa");
    //   localStorage.clear()
  } else {
    let empProduct = [];
    localStorage.setItem("products", JSON.stringify(empProduct));
  }
};

product.addEventListener("click", () => {
  //You could remove this line
  let ddlItems = document.getElementById("productList");

  let unparsedProduct = localStorage.getItem("products");
  console.log(unparsedProduct);
  const productData = JSON.parse(unparsedProduct);

  for (var i = 0; i < productData.length; i++) {
    var opt = productData[i].productName;
    var el = document.createElement("option");
    var tag = productData[i].tag;

    el.textContent = opt;
    el.value = opt;

    ddlItems.appendChild(el);
  }
  productModal.style.display = "block";
});

productList.addEventListener("change", () => {
  var e = document.getElementById("productList");
  var strUser = e.value;

  productList.addEventListener("click", () => {
    productDescDiv.style.display = "block";
  });

  // alert(strUser)
});

closeProductModal.addEventListener("click", () => {
  productModal.style.display = "none";
});

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#mobile-nav");

// hamburger.addEventListener("click", () => {
//   if (navLinks.style.display == "none") {
//     navLinks.style.display = "block";
//   } else {
//     navLinks.style.display = "none";
//   }
//   navLinks.classList.toggle("hidden");
// });

let roomSmall = document.getElementById("roomSmall");
let roomMedium = document.getElementById("roomMedium");
let roomLarge = document.getElementById("roomLarge");
let roomOne = document.getElementById("roomOne");
let roomTwo = document.getElementById("roomTwo");
let roomThree = document.getElementById("roomThree");
let roomFour = document.getElementById("roomFour");
let roomFive = document.getElementById("roomFive");
let windowOne = document.getElementById("windowOne");
let windowTwo = document.getElementById("windowTwo");
let windowThree = document.getElementById("windowThree");
let windowFour = document.getElementById("windowFour");
let windowFive = document.getElementById("windowFive");
let coatOne = document.getElementById("coatOne");
let coatTwo = document.getElementById("coatTwo");
let coatThree = document.getElementById("coatThree");

function calculate() {
  let unparsedProduct = localStorage.getItem("products");
  console.log(unparsedProduct);
  const productData = JSON.parse(unparsedProduct);
  let productName = document.getElementById("productList").value;
  let roomSize = document.getElementById("roomSize").value;
  let numberRoom = document.getElementById("numberRoom").value;
  let windowNumber = document.getElementById("windowNumber").value;
  let spreadRatio = document.getElementById("spreadRatio").value;

  let largeRoom = 57.24;
  let mediumRoom = 29.33;
  let smallRoom = 20;
  let largeWindow = 1.8544;
  let mediumWindow = 1.4884;
  let smallWindow = 1.1102;
  let spread1 = 0.8;
  let spread2 = 1.2;
  let spread3 = 1.5;
  let volume;
  let result;

  if (roomSize === "Small") {
    result = smallRoom - smallWindow;
    if ((spreadRatio = "c1")) {
      volume = result * spread1 * parseInt(numberRoom);
    } else if ((spreadRatio = "c2")) {
      volume = result * spread2 * parseInt(numberRoom);
    } else {
      volume = result * spread3 * parseInt(numberRoom);
    }
  } else if (roomSize === "Medium") {
    result = mediumRoom - mediumWindow;
    if ((spreadRatio = "c1")) {
      volume = result * spread1 * parseInt(numberRoom);
    } else if ((spreadRatio = "c2")) {
      volume = result * spread2 * parseInt(numberRoom);
    } else {
      volume = result * spread3 * parseInt(numberRoom);
    }
  } else {
    result = largeRoom - largeWindow;
    if ((spreadRatio = "c1")) {
      volume = result * spread1 * parseInt(numberRoom);
    } else if ((spreadRatio = "c2")) {
      volume = result * spread2 * parseInt(numberRoom);
    } else {
      volume = result * spread3 * parseInt(numberRoom);
    }
  }
  console.log("volume", volume);
  productModal.style.display = "none";

  var pricePerVolume = productData.find(
    (val) => val.productName === productName
  ).pricePerVolume;

  console.log("pricePerVolume", pricePerVolume);
  var total = volume * parseFloat(pricePerVolume);
  console.log(total);

  let body = document.getElementById("productBody");

  var para = document.createElement("tr");
  // row.style.borderBottom = "1px solid #000"
  para.innerHTML = `
                <td>${productName}</td> 
                <td>${volume.toFixed(2)}</td>
                <td>${pricePerVolume}</td>
                <td>${total.toFixed(2)}</td>
                <td><a onClick='onEdit(this)' class="text-blue-700" href="#"></a> <a onClick='onDelete(this)' class="text-red-700" href="#"> Delete</a></td>
    `;
  body.appendChild(para);

  TotalSum(total);

  document
    .querySelectorAll("#productList option")
    .forEach((option) => option.remove());
}

function TotalSum(total) {
  let storageSum = localStorage.getItem("sum");
  let totalSum = document.getElementById("totalSum");
  let res;
  if (storageSum) {
    res = parseFloat(storageSum) + total;
    localStorage.setItem("sum", res);
  } else {
    // let fixedTotal = total.toFixed(2);
    res = total.toFixed(2);
    localStorage.setItem("sum", res);
  }

  totalSum.innerHTML = res;
  // localStorage.clear()
}

// function TotalSum(total){
//     let totalOrder = 0;
//     let totalRes = document.getElementById('totalSum');
//     totalRes.value = totalOrder + total

// }

// Delete
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    console.log(row);
    document.getElementById("productHead").deleteRow(row.rowIndex);
  }
  let storageSum = localStorage.getItem("sum");
  let totalSum = document.getElementById("totalSum");
  let res;
  if (storageSum) {
    res = parseFloat(storageSum) - total;
    localStorage.setItem("sum", res);
  }
  // else{
  //     res = 0 + total
  //     localStorage.setItem('sum', res)
  // }
  totalSum.innerHTML = res;
}

// let checkOut = document.getElementById('checkOut');
// checkOut.addEventListener('click', () => {
//     console.log('welcome');
// })

let checkOut = document
  .getElementById("check-out")
  .addEventListener("click", () => {
    let totalSum = document.getElementById("totalSum");
    let totalSumFixed = totalSum.toFixed(2);

    let totalAmount = totalSumFixed.innerHTML;

    makePayment(totalAmount);
    alert(totalAmount);

    //   console.log('checkOut')
  });

function makePayment(totalAmount) {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: totalAmount,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "rose@unsinkableship.com",
      phone_number: "08102909304",
      name: "Rose DeWitt Bukater",
    },
    customizations: {
      title: "The Icepaint Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
  });
}

//    let productData = [
//     {
//         color: 'Ice Blue',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 15,
//         id:1,
//         tag: 'blue'

//     },
//     {
//         color: 'Ice White',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 20,
//         id:2,
//         tag: 'white'

//     },
//     {
//         color: 'Ice Pink',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 12,
//         id:3,
//         tag: 'pink'

//     },
//     {
//         color: 'Ice Orange',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 10,
//         id:4,
//         tag: 'orange'

//     },
//     {
//         color: 'Ice Brown',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 14,
//         id:5,
//         tag:'brown'

//     },
//     {

//         color: 'Ice Cream',
//         Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only",
//         Rate: 16,
//         id:6,
//         tag: 'cream'

//     },
// ]
