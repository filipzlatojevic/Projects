const form = document.querySelector('form');
const inputProd = document.querySelector('#product');
const inputQty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const prodName = inputProd.value;
    const prodQty = inputQty.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${prodQty} ${prodName}`;
    list.append(newLi);
    inputProd.value = '';
    inputQty.value = '';
});