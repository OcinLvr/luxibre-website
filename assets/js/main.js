import cart from './cart.js';
import products, { calculateDiscount } from './products.js';
import { createHeader, createNavigation, createFooter } from './shared-components.js';

// Initialisation du panier
cart.init();

// Rendre les objets disponibles globalement
window.cart = cart;
window.products = products;
window.calculateDiscount = calculateDiscount;

// Ajout dynamique des composants partagés
document.addEventListener('DOMContentLoaded', () => {
    // Insérer l'en-tête si l'élément existe
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = createHeader();
    }

    // Insérer la navigation si l'élément existe
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = createNavigation();
    }

    // Insérer le pied de page si l'élément existe
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = createFooter();
    }
});

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
