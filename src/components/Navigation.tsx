import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems, openCart } = useCart();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/formations', label: 'Formations' },
    { path: '/store', label: 'Boutique' },
    { path: '/gallery', label: 'Galerie' },
    { path: '/about', label: 'À Propos' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="https://i.ibb.co/cc8bDTp3/said.png"
                alt="SAID AUTO TECH Logo"
                className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">SAID AUTO TECH</div>
              <div className="text-xs text-blue-400">Automotive Excellence</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openCart}
              className="relative ml-4 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
