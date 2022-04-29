const productAddButton = document.getElementById('addProductButton')
const productCreateForm = document.getElementById('createProductForm')
const closeProductForm = document.getElementById('closeProductForm')

const form = document.querySelector('#product-form');
let productName = document.getElementById('product-name'); 
let stockQuantity = document.getElementById('stockQuantity');
let description = document.getElementById('description');
let pricePerVolume = document.getElementById('pricePerVolume');
let addButton = document.getElementById('addButton');
let tableItems = document.getElementById('tableItems')

productAddButton.addEventListener('click', () =>{
    productCreateForm.style.display = 'block'
});

closeProductForm.addEventListener('click', () => {
    productCreateForm.style.display = 'none'
})




window.onload = function(){
    if (localStorage.getItem('products')){
        fillTable();
        // localStorage.clear();
    }
    else{
        let productValues = [];
        localStorage.setItem('products', JSON.stringify(productValues));
    }
};



// ................Saving Values from Form to Local Storage................................

let products = [];

let fetchProduct = () =>{
    let fromLocalStorage = (localStorage.getItem('products'));
    products = JSON.parse(fromLocalStorage);
    let product = {
        id: products.length + 1,
        productName: productName.value,
        stockQuantity: stockQuantity.value,
        description: description.value,
        pricePerVolume: pricePerVolume.value,
    }
    
    
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    fillTable();
}

form.addEventListener('submit', (e)=> {
    fetchProduct();
    e.preventDefault();
    form.style.display = 'none';
});


//............... Populating Table With Data From Local Storage.....................

const fillTable = () => {
    let fromLocalStorage = (localStorage.getItem('products'));
    let products = JSON.parse(fromLocalStorage)

    tableItems.innerHTML = '',
    products.forEach((items) => {
        const row = document.createElement('tr');
        row.style.borderBottom = "1px solid #000"
        row.style.borderColor = 'gray'
        row.classList.add('my-row')
        
        row.append(tableInfo(items.id));
        row.append(tableInfo(items.productName));
        row.append(tableInfo(items.stockQuantity));
        row.append(tableInfo(items.description));
        row.append(tableInfo(items.pricePerVolume));
        
        tableItems.append(row);

});
};

const tableInfo = (info) => {
    const items = document.createElement('td');
    items.classList.add('my-space');
    items.textContent = info;
    return items;
};


// const actions = (id) => {

//     const actionsCell = document.createElement('td');
//     actionsCell.style.display = 'flex';

//     // let editButton = document.createElement('button');
//     // editButton.innerHTML = `<p> Edit </p>`;

//     // editButton.addEventListener('click', () => {

//     // })
    
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete'
//     actionsCell.appendChild(deleteButton);
//     deleteButton.addEventListener('click', () => deleteProduct(id));

    
//     // return actionsCell
// };


// const deleteProduct = (id) => {
//     let products = JSON.parse(localStorage.getItem('products'));
//     products = products.filter((product) => product.id != id);
//     fillTable();
//   }





