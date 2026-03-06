import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'ECU Programming',
      category: 'ECU',
    },
    {
      url: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Vehicle Diagnostic',
      category: 'Diagnostic',
    },
    {
      url: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Key Programming',
      category: 'Locksmith',
    },
    {
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Professional Tools',
      category: 'Equipment',
    },
    {
      url: 'https://images.pexels.com/photos/3862364/pexels-photo-3862364.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Engine Tuning',
      category: 'ECU',
    },
    {
      url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Workshop Setup',
      category: 'Workshop',
    },
    {
      url: 'https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Electronic Repairs',
      category: 'Repair',
    },
    {
      url: 'https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Advanced Diagnostics',
      category: 'Diagnostic',
    },
    {
      url: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Module Coding',
      category: 'Programming',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-medium">
                Notre Travail
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Galerie de Projets
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Découvrez notre expertise à travers nos réalisations en programmation ECU, diagnostic automobile et serrurerie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-blue-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-2">
              {images[selectedImage].category}
            </span>
            <h3 className="text-2xl font-bold text-white">{images[selectedImage].title}</h3>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vous Avez un Projet?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
            </p>
            <a
              href="https://wa.me/212XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Discutons de Votre Projet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
