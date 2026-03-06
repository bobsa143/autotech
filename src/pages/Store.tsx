import { Package, ShoppingCart, Download, CheckCircle, Star, Laptop, FileText, BookOpen } from 'lucide-react';

export default function Store() {
  const products = [
    {
      id: 1,
      title: 'ECU Programming Software Pack',
      category: 'Software',
      price: '450€',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pack complet de logiciels pour la programmation ECU professionnelle',
      features: [
        'Plus de 5000 véhicules supportés',
        'Mises à jour gratuites à vie',
        'Support technique inclus',
        'Interface multilingue',
        'Tutoriels vidéo inclus',
      ],
      popular: true,
    },
    {
      id: 2,
      title: 'Automotive Diagnostic Software Pack',
      category: 'Software',
      price: '350€',
      rating: 5,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Logiciel de diagnostic automobile complet pour tous types de véhicules',
      features: [
        'Diagnostic multi-marques',
        'Lecture/effacement de codes',
        'Codage de modules',
        'Base de données technique',
        'Graphiques en temps réel',
      ],
      popular: false,
    },
    {
      id: 3,
      title: 'Key Programming Software Suite',
      category: 'Software',
      price: '250€',
      rating: 5,
      image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Suite logicielle complète pour la programmation de clés automobiles',
      features: [
        'Programmation de clés par OBD',
        'Support EEPROM',
        'Plus de 3000 modèles',
        'Calculateur de PIN',
        'Documentation complète',
      ],
      popular: false,
    },
    {
      id: 4,
      title: 'Automotive Workshop Laptop Pack',
      category: 'Hardware + Software',
      price: '12000 MAD',
      rating: 5,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pack complet avec ordinateur portable et logiciels professionnels pré-installés',
      features: [
        'Ordinateur portable haute performance',
        'Tous les logiciels pré-installés',
        'Interface OBD incluse',
        'Mallette de transport',
        'Formation incluse',
      ],
      popular: true,
    },
    {
      id: 5,
      title: 'DPF/EGR/AdBlue OFF Software',
      category: 'Software',
      price: '1800 MAD',
      rating: 4,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Logiciel spécialisé pour la suppression DPF, EGR et AdBlue',
      features: [
        'Support multi-marques',
        'Modifications sécurisées',
        'Préservation des garanties',
        'Mises à jour régulières',
        'Guide d\'utilisation',
      ],
      popular: false,
    },
    {
      id: 6,
      title: 'Professional Tuning Software',
      category: 'Software',
      price: '5500 MAD',
      rating: 5,
      image: 'https://images.pexels.com/photos/3862364/pexels-photo-3862364.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Logiciel professionnel de tuning et optimisation moteur',
      features: [
        'Stage 1/2/3 tuning',
        'Optimisation puissance/couple',
        'Économie de carburant',
        'Plus de 10000 fichiers',
        'Support technique expert',
      ],
      popular: true,
    },
    {
      id: 7,
      title: 'Guide Complet ECU - Collection PDF',
      category: 'Documentation PDF',
      price: '50€',
      rating: 5,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collection complète de guides PDF pour la programmation ECU',
      features: [
        'Plus de 500 pages de documentation',
        'Schémas de câblage détaillés',
        'Procédures pas à pas',
        'Mises à jour gratuites',
        'Téléchargement instantané',
      ],
      popular: false,
    },
    {
      id: 8,
      title: 'Manuels Techniques Automobile - Pack PDF',
      category: 'Documentation PDF',
      price: '75€',
      rating: 5,
      image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pack complet de manuels techniques pour toutes marques',
      features: [
        'Manuels de réparation complets',
        'Diagrammes électriques',
        'Spécifications techniques',
        'Multi-marques (50+ marques)',
        'Format PDF recherchable',
      ],
      popular: true,
    },
    {
      id: 9,
      title: 'Schémas Électriques Automobile - Collection',
      category: 'Documentation PDF',
      price: '60€',
      rating: 5,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Base de données complète de schémas électriques automobiles',
      features: [
        'Plus de 1000 schémas',
        'Haute résolution',
        'Recherche par modèle/année',
        'Diagrammes de câblage complets',
        'Codes couleur normalisés',
      ],
      popular: false,
    },
    {
      id: 10,
      title: 'Guide de Diagnostic - Documentation Professionnelle',
      category: 'Documentation PDF',
      price: '45€',
      rating: 5,
      image: 'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Guide complet de diagnostic automobile avec codes d\'erreur',
      features: [
        'Base de données codes OBD',
        'Procédures de diagnostic',
        'Solutions de dépannage',
        'Tableaux de valeurs',
        'Guide d\'interprétation',
      ],
      popular: false,
    },
    {
      id: 11,
      title: 'Pack Complet Documentation Pro',
      category: 'Documentation PDF',
      price: '180€',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pack complet incluant tous les guides, manuels et schémas',
      features: [
        'Tous les guides PDF inclus',
        'Plus de 2000 pages',
        'Mises à jour à vie',
        'Support technique inclus',
        'Économisez 40%',
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-medium">
                Boutique en Ligne
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Logiciels, Documentation & Équipements Pro
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Découvrez notre sélection de logiciels, guides PDF, manuels techniques et équipements professionnels pour l'industrie automobile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:scale-105"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Populaire
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 text-sm font-medium">{product.category}</span>
                    <div className="flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-blue-500">{product.price}</div>
                    <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:scale-105 group">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300">
              <Package className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Livraison Rapide</h3>
              <p className="text-gray-400 text-sm">Livraison en 24-48h partout au Maroc et Sénégal</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300">
              <Download className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Téléchargement Instantané</h3>
              <p className="text-gray-400 text-sm">Accès immédiat aux logiciels et PDF après achat</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300">
              <FileText className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation Pro</h3>
              <p className="text-gray-400 text-sm">Guides, manuels et schémas haute qualité</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300">
              <Laptop className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Support Technique</h3>
              <p className="text-gray-400 text-sm">Assistance technique 24/7 pour tous nos produits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'Aide pour Choisir?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Nos experts sont là pour vous conseiller et vous aider à choisir les meilleurs outils pour votre activité
            </p>
            <a
              href="https://wa.me/221784827229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Contactez un Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
