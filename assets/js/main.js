import cart from './cart.js';
import products from './products.js';

// Fonction de calcul du pourcentage de réduction
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Logique pour vérifier que les images des produits se chargent correctement
console.log("Produits chargés :", products);
products.forEach(product => {
    console.log(`Chemin image pour ${product.name}: ${product.image}`);
    
    const img = new Image();
    img.onload = () => console.log(`Image chargée : ${product.name}`);
    img.onerror = () => console.error(`Erreur de chargement : ${product.name}`);
    img.src = product.image;
});

// Initialisation d'Alpine.js
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
