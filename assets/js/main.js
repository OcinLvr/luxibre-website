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

// Définir la fonction productPage pour Alpine.js
function productPage() {
    return {
        products: products,          // Liste des produits
        selectedCategory: '',        // Catégorie sélectionnée
        sortBy: 'price_asc',         // Tri par défaut
        cart: cart,                  // Référence au panier
        calculateDiscount,           // Fonction de réduction

        // Filtrage des produits en fonction de la catégorie et du tri
        get filteredProducts() {
            let result = [...this.products];
            
            // Filtrage par catégorie
            if (this.selectedCategory) {
                result = result.filter(product => product.category === this.selectedCategory);
            }

            // Tri des produits
            switch (this.sortBy) {
                case 'price_asc':
                    result.sort((a, b) => a.price - b.price);
                    break;
                case 'price_desc':
                    result.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    result.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                default:
                    break;
            }
            return result;
        },

        // Ajouter un produit au panier
        addToCart(product) {
            this.cart.addToCart(product);
        },
    };
}

// Initialisation d'Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('productPage', productPage);  // Enregistrer la fonction productPage
});

// Initialisation du panier
cart.init();

// Rendre ces objets accessibles globalement
window.cart = cart;
window.products = products;
