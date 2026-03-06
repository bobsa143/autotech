export default function WhatsAppButton() {
  const whatsappNumber = '212XXXXXXXXX';
  const message = 'Hello, I would like to inquire about your automotive services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <img
        src="https://blog.logomyway.com/wp-content/uploads/2017/02/whatsapp-icon.jpg"
        alt="WhatsApp"
        className="h-6 w-6"
      />
      <div className="absolute bottom-full right-0 mb-2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Contact on WhatsApp
      </div>
    </a>
  );
}
