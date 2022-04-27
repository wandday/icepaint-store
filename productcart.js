let product = document.querySelector('#newProduct')
const edit = document.getElementById('editBtn')
const del = document.getElementById('deleteBtn')
const productModal = document.getElementById('productModal')
const closeProductModal = document.getElementById('closeProductModal')

product.addEventListener('click', ()=>{
    productModal.style.display = 'block'
})

closeProductModal.addEventListener('click', ()=>{
    productModal.style.display = 'none'
})
