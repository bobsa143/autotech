export default function Privacy() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Politique de confidentialité</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              SAID AUTO TECH s'engage à protéger la confidentialité de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons
              vos informations personnelles lorsque vous utilisez nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Données collectées</h2>
            <p>Nous collectons les types de données suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informations d'identification : nom, prénom, adresse email</li>
              <li>Coordonnées : numéro de téléphone, adresse postale</li>
              <li>Informations de commande : détails des services demandés, historique des achats</li>
              <li>Données techniques : adresse IP, type de navigateur, système d'exploitation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation des données</h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Traiter vos commandes et fournir nos services</li>
              <li>Communiquer avec vous concernant nos services</li>
              <li>Améliorer nos services et votre expérience client</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Vous envoyer des informations marketing (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non autorisé, modification,
              divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Partage des données</h2>
            <p>
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons
              partager vos informations avec :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nos prestataires de services (paiement, livraison, hébergement)</li>
              <li>Les autorités légales lorsque la loi l'exige</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation.
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut
              affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour
              fournir nos services et respecter nos obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer
              vos droits, contactez-nous à :
            </p>
            <p className="mt-2">
              Email : contact@saidautotech.com<br />
              Téléphone : +212 XXX-XXXXXX
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications seront publiées sur cette page avec une date de mise à jour.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
