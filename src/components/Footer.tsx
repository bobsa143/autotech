import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.ibb.co/cc8bDTp3/said.png"
                alt="SAID AUTO TECH Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-white text-xl font-bold">SAID AUTO TECH</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional Automotive Locksmith, ECU Programming and Vehicle Diagnostics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Automotive Locksmith</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">ECU Programming</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Vehicle Diagnostic</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Machines Diagnostic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/formations" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Formations</Link></li>
              <li><Link to="/store" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Boutique</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Galerie</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">À Propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Morocco & Senegal</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>+221784827229 / +212675154848</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>contact@saidautotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SAID AUTO TECH. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/legal" className="text-gray-400 hover:text-blue-500 transition-colors">
                Légal
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/mentions" className="text-gray-400 hover:text-blue-500 transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
