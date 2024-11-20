// assets/js/products.js

const products = {
    data: [
        {
            id: 1,
            name: 'Montre Élégante Or Rose',
            price: 129.99,
            originalPrice: 249.99,
            description: 'Un chef-d\'œuvre horloger, bracelet en acier inoxydable, cadran en or rose, mouvement suisse de précision.',
            image: 'https://via.placeholder.com/300x400?text=Montre+Luxe',
            aliexpressUrl: '',
            stock: 15,
            shipping: {
                time: '15-20 jours',
                price: 0,
                method: 'AliExpress Standard Shipping'
            }
        },
        {
            id: 2,
            name: 'Parfum Sensuel Nocturne',
            price: 89.99,
            originalPrice: 159.99,
            description: 'Un parfum envoûtant qui sublime votre personnalité, notes boisées et florales, sillage longue durée.',
            image: 'https://via.placeholder.com/300x400?text=Parfum+Luxe',
            aliexpressUrl: '',
            stock: 20,
            shipping: {
                time: '15-20 jours',
                price: 0,
                method: 'AliExpress Standard Shipping'
            }
        },
        {
            id: 3,
            name: 'Lunettes de Soleil Aviateur',
            price: 99.50,
            originalPrice: 199.50,
            description: 'Design vintage, verres polarisés haut de gamme, monture en métal premium, protection UV maximale.',
            image: 'https://via.placeholder.com/300x400?text=Lunettes+Luxe',
            aliexpressUrl: '',
            stock: 25,
            shipping: {
                time: '15-20 jours',
                price: 0,
                method: 'AliExpress Standard Shipping'
            }
        }
    ],

    getAll() {
        return this.data;
    },

    getById(id) {
        return this.data.find(product => product.id === id);
    },

    getInStock() {
        return this.data.filter(product => product.stock > 0);
    },

    calculateDiscount(price, originalPrice) {
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
};

export default products;
