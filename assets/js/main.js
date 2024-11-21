import cart from './cart.js';
import products from './products.js';

// Fonction pour calculer la remise
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Configuration Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.store('cart', cart);
    Alpine.store('products', products);

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
