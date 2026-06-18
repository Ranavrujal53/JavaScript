import { addToCart, removeFromCart, calculateTotal, getCart } from "./011_cartUtils.js";

addToCart({ name: "Shoes", price: 999 });
addToCart({ name: "Watch", price: 1999 });
addToCart({ name: "T-Shirt", price: 499 });

removeFromCart("T-Shirt");

const items = getCart();

console.log("Cart Items:", items);

const total = calculateTotal();
console.log("Total Price:", total);

const cartDiv = document.getElementById("cart");

items.forEach(item => {
    cartDiv.innerHTML += `
    <div class="cart-item">
        <div class="item-name">${item.name}</div>
        <div class="price">₹${item.price}</div>
    </div>
`;
});

cartDiv.innerHTML += `
    <h2>Total: ₹${total}</h2>
`;