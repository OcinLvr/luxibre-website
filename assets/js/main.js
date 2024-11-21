import cart from './cart.js';
import products from './products.js';

// Fonction de calcul du pourcentage de réduction
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Débogage complet des chemins d'images
console.log("Produits chargés :", products);
products.forEach(product => {
    console.log(`Détails du produit : `, product);
    
    const img = new Image();
    img.onload = () => {
        console.log(`✅ Image chargée avec succès : ${product.name}`);
        console.log(`Dimensions : ${img.width}x${img.height}`);
    };
    img.onerror = (e) => {
        console.error(`❌ Erreur de chargement de l'image pour ${product.name}`);
        console.error(`Chemin de l'image : ${product.image}`);
        console.error(`Erreur détaillée :`, e);
    };
    
    // Utiliser le chemin complet depuis la racine du site
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
