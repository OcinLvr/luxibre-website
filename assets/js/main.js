import cart from './cart.js';
import products from './products.js';

// Rendre ces objets disponibles globalement
window.cart = cart;
window.products = products;

// Initialisation du panier
cart.init();

// Configuration Alpine.js si nécessaire
if (window.Alpine) {
    window.Alpine.store('cart', cart.items);
    window.Alpine.store('products', products);
}
