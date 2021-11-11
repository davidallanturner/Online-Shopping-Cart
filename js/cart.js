/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('item')) || [];
  let cart = new Cart(cartItems);
  // console.log(cart);
  return cart;
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  let l = loadCart();
  clearCart();
  showCart(l);
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tbody = document.querySelector('#cart > tbody:nth-child(2)');
  


  const tfoot = document.querySelector('#cart > tfoot:nth-child(3)');

  tfoot.parentElement.removeChild(tfoot);
  tbody.parentElement.removeChild(tbody);
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(l) {

  // DONE: Find the table body
  const cartContain = document.getElementById('cart-container');
  // const table = document.getElementById('cart');
  let table = document.getElementById('cart');  
  let tfoot = document.createElement('tfoot');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  table.appendChild(tfoot);
  // DONE: Iterate over the items in the cart
  // console.log(l);
  for(let i=0; i<l.items.length; i++){
    // console.log(l.items);
  // console.log(cartItems);
  // DONE: Create a TR
    let tbody = document.querySelector('#cart > tbody:nth-child(2)');
  let tr = document.createElement('tr');
  tr.id = 'a'+ i;
  tbody.appendChild(tr);
  
  let trx = document.getElementById('a'+ i);
  console.log(trx);

//td for items
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');

// console.log(l.items[i].product);

td3.textContent = l.items[i].product;
td2.textContent = l.items[i].quantity;
td1.textContent = 'del';

trx.appendChild(td1);
// console.log(td1);
trx.appendChild(td2);
trx.appendChild(td3);



  // TODO: Create a TD for the delete link, quantity,  and the item
  let del = document.createElement('td')
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();


}

// This will initialize the page and draw the cart on screen
renderCart();
