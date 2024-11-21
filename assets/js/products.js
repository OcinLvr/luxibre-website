export default [
    {
        id: 1,
        name: "Montre Élégante",
        description: "Montre de luxe en acier inoxydable avec cadran en or rose",
        price: 1299.99,
        originalPrice: 1599.99,
        image: "../assets/images/products/montre.jpg", // Chemin relatif à la racine du site
        category: "Accessoires"
    }
];

export function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}
