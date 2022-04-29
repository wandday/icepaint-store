let product = document.querySelector('#newProduct')
const edit = document.getElementById('editBtn')
const del = document.getElementById('deleteBtn')
const productModal = document.getElementById('productModal')
const closeProductModal = document.getElementById('closeProductModal')
const tableBody = document.getElementById('productTable')
const productDescDiv = document.getElementById('productDescDiv')
const productName = document.getElementById('productName')
const productPriceRate = document.getElementById('productPriceRate')
const productImg = document.getElementById('productImg')

product.addEventListener('click', ()=>{
//You could remove this line
let ddlItems = document.getElementById("productList")
// itemArray = ["", "b", "c"];
let productData = [
    {
        color: 'Ice Blue',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 15,
        id:1
        

        
    },
    {
        color: 'Ice White',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 20,
        id:2
        
    },
    {
        color: 'Ice Pink',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 12,
        id:3 
    
    },
    {
        color: 'Ice Orange',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 10,
        id:4 
    
    },
    {
        color: 'Ice Brown',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 14,
        id:5
        
    },
    {
        
        color: 'Ice Cream',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 16,
        id:6
         
    },
]
for (var i = 0; i < productData.length; i++) {
  var opt = productData[i].color;
  var el = document.createElement("option");

  el.textContent = opt;
//   el.value = opt;


  ddlItems.appendChild(el);

}
    productModal.style.display = 'block'
})



productList.addEventListener('change', ()=>{
  
    var e = document.getElementById("productList");
    var strUser = e.value;
     
    productList.addEventListener('click', ()=>{
        productDescDiv.style.display = 'block'
    })

    // alert(strUser)

})

closeProductModal.addEventListener('click', ()=>{
    productModal.style.display = 'none'
})





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

let productData = [
    {
        color: 'Ice Blue',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: 15,
        id:1

        
    },
    {
        color: 'Ice White',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: '20/L', 
        
    },
    {
        color: 'Ice Pink',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: '12/L', 
    
    },
    {
        color: 'Ice Orange',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: '10/L', 
    
    },
    {
        color: 'Ice Brown',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: '14/L',
        
    },
    {
        
        color: 'Ice Cream',
        Description: "A budget matt emulsion finish emulsion with covering capacity of 6-7sqm/Ltr. For interior use only", 
        Rate: '16/L',
         
    },
]

productData.forEach((product)=>{
    // const tbody = document.createElement('tbody');
    const row = document.createElement('tr');
    const productNameTd = document.createElement('td');
    const productDescriptionTd = document.createElement('td');
    const productVolumeTd = document.createElement('td');
    const productPriceTd = document.createElement('td');
    // const productTotalTd = document.createElement('td');
    const productTotalTd = document.createElement('td');

    productNameTd.innerHTML = product.color;
    // productDescriptionTd.innerHTML = 'Product desc';
    productVolumeTd.innerHTML = 'product volume';
    productPriceTd.innerHTML = 'product price';
    productTotalTd.innerHTML = 'product total';

    row.classList.add('m-auto', 'py-0', 'bg-white', 'mb-4', 'ml-14', 'rounded-r-md', 'mx-auto', 'font-medium', 'border-l-4', 'border-blue-800')
    
    // productDescriptionTd.classList.add('px-24')
    productNameTd.classList.add('px-12')
    productVolumeTd.classList.add('px-20', 'py-1')
    productPriceTd.classList.add('px-12')
    productTotalTd.classList.add('px-24')
    tableBody.appendChild(row);


    row.appendChild(productNameTd);
    row.appendChild(productDescriptionTd);
    row.appendChild(productVolumeTd);
    row.appendChild(productPriceTd);
    row.appendChild(productTotalTd);

    


    console.log(row);




    // row.innerHTML = `
    // <tr class="m-auto py-0 bg-white mb-4 ml-14 rounded-r-md mx-auto font-medium border-l-4 border-blue-800">
    // <td id="sn" class="px-4 py-1">1</td>
    // <td id="Color" class="px-24">hbug</td>
    // <td id="Volume" class="px-24">regwrh</td>
    // <td id="Price" class="px-24">whywh</td>
    // <td id="Total" class="px-28">wrerhw</td>
    
    // </tr>
    // `
    // tableBody.appendChild(row)
})