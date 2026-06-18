import { addToCart, removeFromCart, calculateTotal, getCart } from "./010_cartUtils.js";

addToCart({ name: "Shoes", price: 999 });
addToCart({ name: "T-Shirt", price: 499 });
addToCart({ name: "Watch", price: 1999 });

console.log("Cart Items:", getCart());

removeFromCart("T-Shirt");

console.log("Updated Cart:", getCart());

const total = calculateTotal();
console.log("Total Price:", total);

document.getElementById("cart").innerHTML = `
    <h3>Cart Items: ${getCart().length}</h3>
    <p>Total Price: ₹${total}</p>
`;