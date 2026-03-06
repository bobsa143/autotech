import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Benali',
      role: 'Mécanicien Professionnel',
      location: 'Casablanca, Morocco',
      rating: 5,
      text: 'Formation ECU exceptionnelle! Les connaissances acquises ont transformé mon atelier. Support technique au top!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Mamadou Diop',
      role: 'Propriétaire d\'Atelier',
      location: 'Dakar, Senegal',
      rating: 5,
      text: 'Service impeccable pour la programmation de clés. Équipe professionnelle et réactive. Je recommande vivement!',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Youssef El Amrani',
      role: 'Technicien Automobile',
      location: 'Rabat, Morocco',
      rating: 5,
      text: 'Les logiciels de diagnostic sont excellents. Support technique réactif et formation de qualité professionnelle.',
      image: 'https://images.pexels.com/photos/1222270/pexels-photo-1222270.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Ibrahim Sow',
      role: 'Entrepreneur Automobile',
      location: 'Thiès, Senegal',
      rating: 5,
      text: 'Grâce à SAID AUTO TECH, j\'ai pu développer mon activité. Les formations sont complètes et très pratiques.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de professionnels qui nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-blue-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
