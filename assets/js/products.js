export default [
    {
        id: 1,
        name: "Montre Élégante",
        description: "Montre de luxe en acier inoxydable avec cadran en or rose",
        price: 1299.99,
        originalPrice: 1599.99,
        image: "/assets/images/products/montre.jpg", // Pour products.html
        // Ou image: "assets/images/products/montre.jpg", // Pour index.html
        category: "Accessoires"
    },
    {
        id: 2,
        name: "Sac à Main de Créateur",
        description: "Sac en cuir italien avec finitions en or, édition limitée",
        price: 2499.50,
        originalPrice: 2899.99,
        image: "/assets/images/products/sac.jpg",
        category: "Accessoires"
    },
    {
        id: 3,
        name: "Parfum Exclusif",
        description: "Fragrance rare aux notes de jasmin et de bois de santal",
        price: 299.99,
        originalPrice: 349.99,
        image: "/assets/images/products/parfum.jpg",
        category: "Parfums"
    },
    {
        id: 4,
        name: "Lunettes de Soleil de Luxe",
        description: "Lunettes de soleil design avec verres polarisés et monture en titane",
        price: 749.99,
        originalPrice: 899.99,
        image: "/assets/images/products/lunettes.jpg",
        category: "Accessoires"
    },
    {
        id: 5,
        name: "Châle en Cachemire",
        description: "Châle artisanal en cachemire pur, tissé à la main",
        price: 899.50,
        originalPrice: 1199.99,
        image: "/assets/images/products/chale.jpg",
        category: "Vêtements"
    },
    {
        id: 6,
        name: "Bracelet en Diamants",
        description: "Bracelet en or blanc 18 carats serti de diamants",
        price: 4999.99,
        originalPrice: 5499.99,
        image: "/assets/images/products/bracelet.jpg",
        category: "Bijoux"
    }
];

export function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}
