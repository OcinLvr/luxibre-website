// assets/js/cart.js

const cart = {
    items: [],

    init() {
        this.loadFromLocalStorage();
        this.updateUI();
        this.setupEventListeners();
    },

    loadFromLocalStorage() {
        const savedCart = localStorage.getItem('luxibreCart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }
    },

    saveToLocalStorage() {
        localStorage.setItem('luxibreCart', JSON.stringify(this.items));
    },

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.saveToLocalStorage();
        this.updateUI();
        this.showNotification(`${product.name} ajouté au panier`);
    },

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateUI();
    },

    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.saveToLocalStorage();
                this.updateUI();
            }
        }
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    updateUI() {
        // Update cart count
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;

        // Update cart content
        const cartContent = document.getElementById('cart-items');
        if (cartContent) {
            cartContent.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <div class="flex items-center justify-between">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                        <div class="flex-1 ml-4">
                            <h4 class="font-semibold">${item.name}</h4>
                            <p class="text-gray-600">${item.price}€</p>
                        </div>
                        <div class="flex items-center">
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="px-2 py-1 bg-gray-200 rounded">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="px-2 py-1 bg-gray-200 rounded">+</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Update total
        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) {
            cartTotal.textContent = `Total: ${this.getTotal().toFixed(2)}€`;
        }
    },

    setupEventListeners() {
        // Toggle cart visibility
        const cartButton = document.getElementById('cart-button');
        const cartPopup = document.getElementById('cart-popup');
        
        if (cartButton && cartPopup) {
            cartButton.addEventListener('click', () => {
                cartPopup.classList.toggle('active');
            });

            // Close cart when clicking outside
            document.addEventListener('click', (e) => {
                if (!cartPopup.contains(e.target) && !cartButton.contains(e.target)) {
                    cartPopup.classList.remove('active');
                }
            });
        }
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
};

export default cart;
