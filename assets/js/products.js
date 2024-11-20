// assets/js/products.js
const products = {
    products: [
        {
            id: 1,
            name: 'Montre Élégante Or Rose',
            price: 129.99,
            originalPrice: 249.99,
            description: 'Un chef-d\'œuvre horloger, bracelet en acier inoxydable, cadran en or rose, mouvement suisse de précision.',
            image: 'https://via.placeholder.com/300x400?text=Montre+Luxe',
            stock: 15
        },
        {
            id: 2,
            name: 'Parfum Sensuel Nocturne',
            price: 89.99,
            originalPrice: 159.99,
            description: 'Un parfum envoûtant qui sublime votre personnalité, notes boisées et florales, sillage longue durée.',
            image: 'https://via.placeholder.com/300x400?text=Parfum+Luxe',
            stock: 20
        },
        {
            id: 3,
            name: 'Lunettes de Soleil Aviateur',
            price: 99.50,
            originalPrice: 199.50,
            description: 'Design vintage, verres polarisés haut de gamme, monture en métal premium, protection UV maximale.',
            image: 'https://via.placeholder.com/300x400?text=Lunettes+Luxe',
            stock: 25
        }
    ],

    calculateDiscount(price, originalPrice) {
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    },

    renderProducts() {
        const productContainer = document.querySelector('[x-data="productData()"] section');
        if (!productContainer) return;

        const productsHTML = this.products.map(product => `
            <div class="product-card bg-white rounded-lg overflow-hidden relative group">
                <div class="limited-badge">Stock Limité</div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover group-hover:opacity-90 transition">
                <div class="p-6">
                    <h3 class="text-2xl font-semibold mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-4 h-16 overflow-hidden">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-3xl font-bold text-red-600">${product.price}€</span>
                            <span class="line-through ml-2 text-gray-400">${product.originalPrice}€</span>
                            <span class="ml-2 text-green-600 font-semibold">-${this.calculateDiscount(product.price, product.originalPrice)}%</span>
                        </div>
                        <button onclick="products.addToCart(${product.id})" class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        productContainer.innerHTML = productsHTML;
    },

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            alert(`${product.name} ajouté au panier !`);
            // Vous pouvez intégrer la logique de panier ici
        }
    }
};

// Render products when page loads
window.addEventListener('DOMContentLoaded', () => {
    products.renderProducts();
});

export default products;
