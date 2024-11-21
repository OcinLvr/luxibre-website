// cart.js
export default {
    items: [],

    init() {
        // Charger le panier depuis le localStorage
        const savedCart = localStorage.getItem('luxibre_cart');
        this.items = savedCart ? JSON.parse(savedCart) : [];
    },

    addToCart(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.saveCart();
    },

    removeFromCart(productId) {
        const index = this.items.findIndex(item => item.id === productId);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.saveCart();
        }
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },

    saveCart() {
        localStorage.setItem('luxibre_cart', JSON.stringify(this.items));
    },

    checkout() {
        if (this.items.length === 0) {
            alert('Votre panier est vide');
            return;
        }
        alert('Merci pour votre commande !\nTotal : ' + this.getTotal() + '€');
        this.items = [];
        this.saveCart();
    }
};
