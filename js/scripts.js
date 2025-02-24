/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Tambahkan produk ke keranjang
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    // Tampilkan produk di keranjang
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Kosongkan daftar keranjang

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });

    // Tampilkan total harga
    document.getElementById('total-price').textContent = `Total: Rp ${totalPrice}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja Anda kosong!');
        return;
    }

    let itemsList = 'Anda telah membeli:\n';
    cart.forEach(item => {
        itemsList += `${item.name} - Rp ${item.price}\n`;
    });
    itemsList += `Total: Rp ${totalPrice}`;

    alert(itemsList);
    // Reset keranjang setelah checkout
    cart = [];
    totalPrice = 0;
    displayCart();
}