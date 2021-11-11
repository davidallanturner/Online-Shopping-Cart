/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  return cart;
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  let l = loadCart();
  clearCart();
  showCart(l);
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const table = document.getElementById('cart');
  table.parentElement.removeChild(table);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(l) {

  // TODO: Find the table body
  const table = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for(let i=0; i<l.length; i++){
  // console.log(cartItems);
  // TODO: Create a TR
  console.log(l[i]);
  let tr = document.createElement('tr');
  tr.updateText = l[i];
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
