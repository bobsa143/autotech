import { Key, Cpu, Search, Cog, Lock, Radio, FileCode, Zap, AlertCircle, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Key,
      title: 'Auto Locksmith Dakar',
      description: 'Serrurier automobile professionnel à Dakar - Solutions complètes pour tous vos besoins en serrurerie automobile',
      features: [
        'Programmation clé voiture Dakar toutes marques',
        'Duplication et clonage de clés automobile',
        'Solution rapide pour clés perdues à Dakar',
        'Programmation de clés intelligentes et télécommandes',
        'Réparation de télécommandes automobile',
        'Déverrouillage de véhicules sans dommage',
      ],
      color: 'blue',
    },
    {
      icon: Search,
      title: 'Diagnostic Automobile Dakar',
      description: 'Diagnostic automobile professionnel à Dakar avec équipement de pointe et techniciens certifiés',
      features: [
        'Diagnostic OBD complet toutes marques à Dakar',
        'Lecture et suppression codes d\'erreur',
        'Codage et programmation de modules électroniques',
        'Réinitialisation systèmes électroniques',
        'Analyse en temps réel avec rapports détaillés',
        'Diagnostic électronique avancé',
      ],
      color: 'orange',
    },
    {
      icon: Cpu,
      title: 'ECU Programming',
      description: 'Programmation et optimisation avancée des calculateurs',
      features: [
        'Clonage d\'ECU',
        'Réparation d\'ECU',
        'Tuning Stage 1/2/3',
        'DPF OFF',
        'EGR OFF',
        'AdBlue OFF',
      ],
      color: 'blue',
    },
    {
      icon: Cog,
      title: 'Machines Diagnostic',
      description: 'Diagnostic spécialisé pour engins de chantier et machines lourdes',
      features: [
        'Diagnostic d\'engins de construction',
        'Dépannage ECU moteur',
        'Réparations électroniques',
        'Calibration de systèmes',
        'Maintenance préventive',
        'Support technique 24/7',
      ],
      color: 'orange',
    },
  ];

  const additionalServices = [
    { icon: Lock, title: 'Immobilizer Programming', description: 'Programmation et désactivation d\'antidémarrage' },
    { icon: Radio, title: 'Radio Code Recovery', description: 'Récupération de codes radio automobile' },
    { icon: FileCode, title: 'Airbag Reset', description: 'Réinitialisation et codage d\'airbag' },
    { icon: Zap, title: 'Performance Tuning', description: 'Optimisation des performances moteur' },
    { icon: AlertCircle, title: 'Error Code Clearing', description: 'Suppression de codes d\'erreur permanents' },
    { icon: Settings, title: 'Module Configuration', description: 'Configuration et adaptation de modules' },
  ];

  const getColorClasses = (color: string) => {
    return color === 'blue'
      ? 'from-blue-500/20 to-blue-500/0 border-blue-500/30 hover:border-blue-500/60'
      : 'from-orange-500/20 to-orange-500/0 border-orange-500/30 hover:border-orange-500/60';
  };

  const getIconColor = (color: string) => {
    return color === 'blue' ? 'text-blue-500' : 'text-orange-500';
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-medium">
                Nos Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Auto Locksmith & Diagnostic Automobile Dakar
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Expert en programmation clé voiture Dakar, diagnostic automobile professionnel et ECU programming. Service rapide et fiable partout à Dakar, Sénégal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${getColorClasses(service.color)} p-8 rounded-2xl border transition-all duration-500 hover:scale-105`}
              >
                <div className="mb-6 inline-block p-4 bg-black/50 rounded-xl">
                  <service.icon className={`h-10 w-10 ${getIconColor(service.color)}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services Additionnels
            </h2>
            <p className="text-gray-400 text-lg">
              Services spécialisés pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <service.icon className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Démarrer?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider
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
