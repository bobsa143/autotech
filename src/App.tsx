import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartModal from './components/CartModal';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Formations from './pages/Formations';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-black">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/store" element={<Store />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/mentions" element={<Legal />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <CartModal />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
