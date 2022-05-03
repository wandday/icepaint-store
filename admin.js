const newProductButton = document.getElementById("newProductButton");
const productCreateForm = document.getElementById("createProductForm");
const closeProductForm = document.getElementById("closeProductForm");

const form = document.querySelector("#product-form");
let productName = document.getElementById("product-name");
let stockQuantity = document.getElementById("stockQuantity");
let description = document.getElementById("description");
let pricePerVolume = document.getElementById("pricePerVolume");
let addButton = document.getElementById("addButton");
let tableItems = document.getElementById("tableItems");
let productURL = document.getElementById("productURL");
let removeItem = document.querySelector("remove");

newProductButton.addEventListener("click", () => {
  productCreateForm.style.display = "block";
});

closeProductForm.addEventListener("click", () => {
  productCreateForm.style.display = "none";
});

window.onload = function () {
  if (localStorage.getItem("products")) {
    fillTable();
    // localStorage.clear();
  } else {
    let productValues = [];
    localStorage.setItem("products", JSON.stringify(productValues));
  }
};

// ................Saving Values from Form to Local Storage................................

let products = [];

let fetchProduct = () => {
  let fromLocalStorage = localStorage.getItem("products");
  products = JSON.parse(fromLocalStorage);
  let product = {
    id: products.length + 1,
    productName: productName.value,
    productURL: productURL.value,
    stockQuantity: stockQuantity.value,
    description: description.value,
    pricePerVolume: pricePerVolume.value,
  };

  if (productName.value != "") {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    fillTable();
    response = alert("The product has been added");
    response;
    clearForm();
  }
};

function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productURL").value = "";
  document.getElementById("stockQuantity").value = "";
  document.getElementById("description").value = "";
  document.getElementById("pricePerVolume").value = "";
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  productCreateForm.style.display = "none";
  fetchProduct();
});

//............... Populating Table With Data From Local Storage.....................

const fillTable = () => {
  let fromLocalStorage = localStorage.getItem("products");
  let products = JSON.parse(fromLocalStorage);

  (tableItems.innerHTML = ""),
    products.forEach((items) => {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid #000";
      row.style.borderColor = "gray";
      row.classList.add("my-row");
      row.append(tableInfo(items.id));
      row.append(tableInfo(items.productName));
      row.append(tableInfo(items.productURL));
      row.append(tableInfo(items.stockQuantity));
      row.append(tableInfo(items.description));
      row.append(tableInfo(items.pricePerVolume));
      row.append(actions(items.id));

      tableItems.append(row);
    });
};

const tableInfo = (info) => {
  const items = document.createElement("td");
  items.classList.add("my-space");
  items.textContent = info;
  return items;
};

const actions = (id) => {
  const actionsCell = document.createElement("td");
  actionsCell.style.display = "flex";
  actionsCell.style.justifyContent = "center";

  const removeButton = document.createElement("button");
  removeButton.innerHTML = `Delete`;
  removeButton.style.color = "red";
  removeButton.addEventListener("click", () => deleteProduct(id));

  actionsCell.appendChild(removeButton);
  return actionsCell;
};

const deleteProduct = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  products = products.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(products));
  console.log(products.length);
  fillTable();
};
