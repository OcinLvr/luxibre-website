import cart from './cart.js';
import products from './products.js';

function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

document.addEventListener('alpine:init', () => {
    Alpine.data('productData', () => ({
        products: products,
        calculateDiscount,
        addToCart(product) {
            cart.addToCart(product);
        }
    }));
});

// Initialisation du panier
cart.init();

// Rendre ces objets disponibles globalement
window.cart = cart;
window.products = products;
