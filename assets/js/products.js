// /assets/js/products.js
export const products = [
    {
        id: 1,
        name: "Montre Élégante",
        description: "Montre de luxe en acier inoxydable avec cadran en or rose",
        price: 1299.99,
        originalPrice: 1599.99,
        image: "/assets/images/products/montre.jpg",  // Chemin absolu
        category: "Accessoires"
    }
];

export const calculateDiscount = (price, originalPrice) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export default products;
