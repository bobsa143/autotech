import { BookOpen, Clock, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Formations() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    student_name: '',
    student_email: '',
    student_phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const courses = [
    {
      id: 'key-programming',
      title: 'Formation Programmation de Clés Automobile',
      duration: '5 jours',
      level: 'Débutant à Avancé',
      price: '100€',
      description: 'Maîtrisez l\'art de la programmation de clés automobiles avec nos experts.',
      modules: [
        'Introduction à la serrurerie automobile',
        'Types de clés et systèmes d\'antidémarrage',
        'Outils et équipements nécessaires',
        'Programmation de clés par OBD',
        'Programmation EEPROM',
        'Cas pratiques et dépannage',
      ],
      benefits: [
        'Certification professionnelle',
        'Support après formation',
        'Accès aux mises à jour',
        'Groupe WhatsApp privé',
      ],
    },
    {
      id: 'ecu-programming',
      title: 'Formation Programmation ECU Avancée',
      duration: '7 jours',
      level: 'Intermédiaire à Avancé',
      price: '200€',
      description: 'Devenez expert en programmation et réparation d\'ECU automobile.',
      modules: [
        'Fonctionnement des ECU modernes',
        'Lecture et écriture EEPROM',
        'Clonage et réparation d\'ECU',
        'Stage tuning et optimisation',
        'Suppression DPF/EGR/AdBlue',
        'Sécurité et protection des ECU',
      ],
      benefits: [
        'Certification professionnelle',
        'Logiciels professionnels inclus',
        'Support technique à vie',
        'Accès à la communauté pro',
      ],
    },
    {
      id: 'diagnostic',
      title: 'Formation Diagnostic Automobile Complet',
      duration: '6 jours',
      level: 'Tous niveaux',
      price: '300€',
      description: 'Apprenez le diagnostic automobile professionnel avec les outils modernes.',
      modules: [
        'Introduction aux systèmes OBD',
        'Utilisation des scanners professionnels',
        'Lecture et interprétation des codes',
        'Diagnostic des systèmes électroniques',
        'Codage et programmation de modules',
        'Cas pratiques et dépannage',
      ],
      benefits: [
        'Certification professionnelle',
        'Accès aux logiciels de diagnostic',
        'Support technique continu',
        'Mises à jour gratuites',
      ],
    },
  ];

  const handleEnroll = async (e: React.FormEvent, courseName: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('course_enrollments').insert([
        {
          ...formData,
          course_name: courseName,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ student_name: '', student_email: '', student_phone: '' });
      setSelectedCourse(null);

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error enrolling:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 text-orange-400 text-sm font-medium">
                Formations Professionnelles
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Formations & Certifications
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Développez vos compétences avec nos formations professionnelles dispensées par des experts de l'industrie automobile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 p-6 rounded-xl border border-orange-500/20 text-center">
              <BookOpen className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Formations Disponibles</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-orange-500/20 text-center">
              <Users className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Étudiants Formés</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-orange-500/20 text-center">
              <Award className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Certifiés</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-orange-500/20 text-center">
              <Clock className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Technique</div>
            </div>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{course.title}</h3>
                      <p className="text-gray-400 mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 text-orange-500 mr-2" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Award className="h-5 w-5 text-orange-500 mr-2" />
                          <span>{course.level}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-8 lg:text-right">
                      <div className="text-4xl font-bold text-orange-500 mb-2">{course.price}</div>
                      <button
                        onClick={() => setSelectedCourse(course.id)}
                        className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/50 hover:scale-105 group"
                      >
                        S'inscrire Maintenant
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Modules de Formation</h4>
                      <ul className="space-y-2">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Avantages Inclus</h4>
                      <ul className="space-y-2">
                        {course.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {selectedCourse === course.id && (
                  <div className="bg-black/50 border-t border-white/10 p-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Formulaire d'Inscription</h4>
                    <form onSubmit={(e) => handleEnroll(e, course.title)} className="max-w-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Nom complet"
                          value={formData.student_name}
                          onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.student_email}
                          onChange={(e) => setFormData({ ...formData, student_email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Téléphone"
                        value={formData.student_phone}
                        onChange={(e) => setFormData({ ...formData, student_phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors mb-4"
                      />
                      <div className="flex gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isSubmitting ? 'Envoi...' : 'Confirmer l\'Inscription'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCourse(null)}
                          className="px-6 py-3 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                      {submitStatus === 'success' && (
                        <p className="text-green-500 mt-4">Inscription envoyée avec succès! Nous vous contacterons bientôt.</p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="text-red-500 mt-4">Une erreur s'est produite. Veuillez réessayer.</p>
                      )}
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
