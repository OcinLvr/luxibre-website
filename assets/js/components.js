export function createHeader() {
    return `
    <header class="bg-black text-white py-8 text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-5xl font-bold tracking-wide font-serif">LUXIBRE</h1>
            <p class="text-xl mt-3 opacity-80">Liberté & Luxe - Une Sélection Exclusive</p>
        </div>
    </header>`;
}

export function createNavigation() {
    return `
    <nav class="bg-gray-100 py-4 shadow-md">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex space-x-6">
                <a href="../index.html" class="text-black hover:text-gray-700 font-semibold">Accueil</a>
                <a href="../pages/products.html" class="text-black hover:text-gray-700 font-semibold">Produits</a>
                <a href="../pages/about.html" class="text-black hover:text-gray-700 font-semibold">À Propos</a>
                <a href="../pages/contact.html" class="text-black hover:text-gray-700 font-semibold">Contact</a>
            </div>
            <div x-data="{ cartOpen: false }" class="relative">
                <button @click="cartOpen = !cartOpen" class="text-black hover:text-gray-700">
                    🛒 Panier (<span x-text="cart.items.length">0</span>)
                </button>
            </div>
        </div>
    </nav>`;
}

export function createFooter() {
    return `
    <footer class="bg-black text-white py-12">
        <div class="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
                <h4 class="text-xl font-semibold mb-4">LUXIBRE</h4>
                <p class="text-gray-300">Découvrez l'élégance à portée de main. Des produits de luxe sélectionnés avec passion.</p>
            </div>
            <div>
                <h4 class="text-xl font-semibold mb-4">Liens Rapides</h4>
                <ul>
                    <li><a href="../index.html" class="text-gray-300 hover:text-white">Accueil</a></li>
                    <li><a href="../pages/products.html" class="text-gray-300 hover:text-white">Produits</a></li>
                    <li><a href="../pages/about.html" class="text-gray-300 hover:text-white">À Propos</a></li>
                    <li><a href="../pages/contact.html" class="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-xl font-semibold mb-4">Contactez-nous</h4>
                <p class="text-gray-300">Email: contact@luxibre.com</p>
                <p class="text-gray-300">Téléphone: +33 1 23 45 67 89</p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
                    <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
                    <a href="#" class="text-gray-300 hover:text-white">Twitter</a>
                </div>
            </div>
        </div>
        <div class="text-center mt-8 border-t border-gray-800 pt-4">
            <p>© 2024 LUXIBRE. Tous droits réservés.</p>
        </div>
    </footer>`;
}
