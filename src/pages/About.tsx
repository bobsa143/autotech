import { Award, Users, Globe, Wrench, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services de la plus haute qualité avec une attention méticuleuse aux détails.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour l\'automobile et la technologie nous pousse à toujours aller plus loin.',
    },
    {
      icon: Users,
      title: 'Service Client',
      description: 'La satisfaction de nos clients est au cœur de tout ce que nous faisons.',
    },
  ];

  const achievements = [
    { icon: Award, value: '15+', label: 'Années d\'Expérience' },
    { icon: Users, value: '5000+', label: 'Clients Satisfaits' },
    { icon: Globe, value: '3', label: 'Pays Couverts' },
    { icon: Wrench, value: '50+', label: 'Services Offerts' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-medium">
                À Propos
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SAID AUTO TECH
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Leader en programmation ECU, serrurerie automobile et diagnostic de véhicules au Maroc, Sénégal et Afrique francophone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SAID AUTO TECH Workshop"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Fondée avec une passion pour l'excellence automobile et l'innovation technologique, SAID AUTO TECH est devenue un leader reconnu dans l'industrie de la serrurerie automobile et de la programmation ECU.
                </p>
                <p>
                  Avec plus de 15 années d'expérience, nous avons développé une expertise exceptionnelle dans tous les aspects de la technologie automobile moderne, de la programmation de clés à l'optimisation des performances moteur.
                </p>
                <p>
                  Notre engagement envers l'excellence et l'innovation nous a permis de servir plus de 5000 clients satisfaits au Maroc, au Sénégal et dans toute l'Afrique francophone.
                </p>
                <p>
                  Aujourd'hui, nous continuons à repousser les limites de ce qui est possible dans le domaine de la technologie automobile, en offrant des solutions de pointe et une formation professionnelle de classe mondiale.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <achievement.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <value.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-3xl p-12 border border-blue-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Notre Mission
            </h2>
            <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto leading-relaxed">
              Fournir des solutions technologiques automobiles innovantes et accessibles, tout en formant la prochaine génération de professionnels de l'automobile. Nous nous engageons à offrir un service exceptionnel, des produits de qualité supérieure et un support technique incomparable à tous nos clients au Maroc, au Sénégal et dans toute l'Afrique francophone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Découvrez comment SAID AUTO TECH peut vous aider à développer vos compétences et votre activité
            </p>
            <a
              href="https://wa.me/212XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Contactez-nous Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
