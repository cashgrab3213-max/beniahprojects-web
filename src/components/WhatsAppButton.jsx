import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '528188688391'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20BENIAH%20Projects,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20vuestros%20servicios`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
      title="Contactar por WhatsApp"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
