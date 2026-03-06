import { X, Minus, Plus, Trash2, ShoppingBag, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

type CheckoutStep = 'cart' | 'info' | 'payment';

export default function CartModal() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart');
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    shipping_address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isCartOpen) return null;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const orderData = {
        ...formData,
        items: JSON.stringify(cart),
        total_amount: getTotalPrice(),
        status: 'paid',
        payment_method: paymentMethod,
      };

      const { error } = await supabase.from('orders').insert([orderData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        shipping_address: '',
      });
      setPaymentData({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
      });
      setPaypalEmail('');
      setPaymentMethod('card');

      setTimeout(() => {
        clearCart();
        setCheckoutStep('cart');
        closeCart();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeCart}></div>

      <div className="relative bg-gray-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl m-4">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">
              {checkoutStep === 'cart' && 'Panier d\'Achat'}
              {checkoutStep === 'info' && 'Informations de Livraison'}
              {checkoutStep === 'payment' && 'Paiement Sécurisé'}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
          {checkoutStep === 'cart' ? (
            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-blue-400 mb-2">{item.category}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                          >
                            <Minus className="h-4 w-4 text-white" />
                          </button>
                          <span className="w-8 text-center text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                          >
                            <Plus className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <div className="text-lg font-bold text-blue-500">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : checkoutStep === 'info' ? (
            <div className="p-6">
              <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                    <h3 className="font-semibold text-white mb-3">Résumé de la Commande</h3>
                    <div className="space-y-2">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-400">
                            {item.title} x{item.quantity}
                          </span>
                          <span className="text-white">{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t border-white/10 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span className="text-white">Total:</span>
                          <span className="text-blue-500">{getTotalPrice().toFixed(2)}€</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.customer_email}
                      onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.customer_phone}
                      onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+212 XXX-XXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Adresse de Livraison
                    </label>
                    <textarea
                      value={formData.shipping_address}
                      onChange={(e) => setFormData({ ...formData, shipping_address: e.target.value })}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Adresse complète de livraison"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="flex-1 px-6 py-3 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/50"
                    >
                      Continuer au Paiement
                    </button>
                  </div>
                </form>
            </div>
          ) : (
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Paiement Réussi!</h3>
                  <p className="text-gray-300 mb-2">
                    Merci pour votre achat. Votre commande a été confirmée.
                  </p>
                  <p className="text-sm text-gray-400">
                    Vous recevrez un email de confirmation sous peu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                    <h3 className="font-semibold text-white mb-3">Résumé de la Commande</h3>
                    <div className="space-y-2">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-400">
                            {item.title} x{item.quantity}
                          </span>
                          <span className="text-white">{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t border-white/10 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span className="text-white">Total:</span>
                          <span className="text-blue-500">{getTotalPrice().toFixed(2)}€</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-start gap-3 mb-6">
                    <Lock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <p className="font-semibold text-white mb-1">Paiement 100% Sécurisé</p>
                      <p>Vos informations sont cryptées et protégées</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Méthode de Paiement
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === 'card'
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="https://banque-info.com/wp-content/uploads/2024/04/CB-vs-Visa-et-MasterCard-un-defi-de-notoriete.jpg"
                            alt="Visa Mastercard"
                            className="h-12 w-auto object-contain rounded"
                          />
                          <span className={`text-sm font-semibold ${paymentMethod === 'card' ? 'text-white' : 'text-gray-400'}`}>
                            Carte Bancaire
                          </span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === 'paypal'
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="https://filecache.mediaroom.com/mr5mr_paypal_fr/177465/pp_h_rgb_logo_tn.jpg"
                            alt="PayPal"
                            className="h-12 w-auto object-contain"
                          />
                          <span className={`text-sm font-semibold ${paymentMethod === 'paypal' ? 'text-white' : 'text-gray-400'}`}>
                            PayPal
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'card' ? (
                    <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Numéro de Carte
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, '');
                          if (value.length <= 16 && /^\d*$/.test(value)) {
                            setPaymentData({ ...paymentData, cardNumber: formatCardNumber(value) });
                          }
                        }}
                        maxLength={19}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="1234 5678 9012 3456"
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom sur la Carte
                    </label>
                    <input
                      type="text"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value.toUpperCase() })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors uppercase"
                      placeholder="SAID SAID"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Date d'Expiration
                      </label>
                      <input
                        type="text"
                        value={paymentData.expiryDate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 4) {
                            setPaymentData({ ...paymentData, expiryDate: formatExpiryDate(value) });
                          }
                        }}
                        maxLength={5}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={paymentData.cvv}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.length <= 3 && /^\d*$/.test(value)) {
                            setPaymentData({ ...paymentData, cvv: value });
                          }
                        }}
                        maxLength={3}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="123"
                      />
                    </div>
                  </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email PayPal
                      </label>
                      <input
                        type="email"
                        value={paypalEmail}
                        onChange={(e) => setPaypalEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Vous serez redirigé vers PayPal pour finaliser le paiement
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-500 text-center">
                        Le paiement a échoué. Veuillez vérifier vos informations.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('info')}
                      className="flex-1 px-6 py-3 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-green-500/50"
                    >
                      {isSubmitting ? 'Traitement...' : `Payer ${getTotalPrice().toFixed(2)}€`}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {checkoutStep === 'cart' && cart.length > 0 && (
          <div className="border-t border-white/10 p-6 bg-black/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-blue-500">
                {getTotalPrice().toFixed(2)}€
              </span>
            </div>
            <button
              onClick={() => setCheckoutStep('info')}
              className="w-full px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:scale-105"
            >
              Passer à la Commande
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
