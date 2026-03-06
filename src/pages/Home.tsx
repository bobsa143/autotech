import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Key, Cpu, Search, Wrench, Award, Users } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const whatsappNumber = '212XXXXXXXXX';
  const message = 'Hello, I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const stats = [
    { icon: Users, value: '5000+', label: 'Clients Satisfaits' },
    { icon: Award, value: '15+', label: 'Années d\'Expérience' },
    { icon: Wrench, value: '50+', label: 'Services Offerts' },
  ];

  const features = [
    {
      icon: Key,
      title: 'Automotive Locksmith',
      description: 'Programmation de clés, duplication, réparation de télécommandes et solutions pour clés perdues.',
    },
    {
      icon: Cpu,
      title: 'ECU Programming',
      description: 'Clonage ECU, réparation, tuning Stage, et optimisation des performances du moteur.',
    },
    {
      icon: Search,
      title: 'Vehicle Diagnostic',
      description: 'Diagnostic OBD complet, lecture de codes d\'erreur, codage de modules et réinitialisation.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/S4hnf6kz/Chat-GPT-Image-5-mars-2026-00-56-09.png"
            alt="Said Auto Tech Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">Technology & Innovation</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            SAID AUTO TECH
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Professional Automotive Locksmith, ECU Programming and Vehicle Diagnostics
          </p>

          <p className="text-lg text-blue-400 mb-12">
            Morocco • Senegal • French-speaking Africa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 group"
            >
              Prendre Rendez-vous
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact WhatsApp
            </a>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 group backdrop-blur-sm"
            >
              Nos Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Services Professionnels
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Solutions complètes pour tous vos besoins automobiles et diagnostics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 group"
            >
              Voir Tous les Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'une Assistance Professionnelle?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour bénéficier de nos services experts en programmation ECU, diagnostic automobile et formation professionnelle.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 group"
            >
              Contactez-nous Maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
