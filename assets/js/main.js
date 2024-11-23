function productList() {
    return {
        products: [],
        cart: [],
        async fetchProducts() {
            const response = await fetch('../assets/js/products.json');
            this.products = await response.json();
        },
        addToCart(product) {
            this.cart.push(product);
            this.showNotification(`${product.name} a été ajouté au panier.`);
        },
        showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => notification.remove(), 3000);
        },
        init() {
            this.fetchProducts();
        },
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('productList', productList);
});
