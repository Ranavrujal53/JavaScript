let cart = [];

export function addToCart(product) {
    cart.push(product);
}

export function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
}

export function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

export function getCart() {
    return cart;
}