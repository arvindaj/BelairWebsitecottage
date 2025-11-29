import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 lg:mb-14 md:my-5">
      <div className="bg-white rounded-lg  border border-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium font-serif uppercase tracking-wide">Room Address</span>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">
              43/26, BEL AIR, 43/10, CLUB 80,<br />
              KOTAGIRI, TAMIL NADU 643217
            </p>
          </div>

         
          <div className="flex flex-col items-start space-y-3 md:border-l md:border-r border-gray-200 md:px-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium uppercase font-serif tracking-wide">Phone Number</span>
            </div>
            <a 
              href="tel:94266277888" 
              className="text-gray-800 text-sm hover:text-[#a3248e] transition-colors"
            >
              94266 277 888
            </a>
          </div>

         
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium font-serif uppercase tracking-wide">Email Address</span>
            </div>
            <a 
              href="mailto:LORENIUS@GMAIL.COM" 
              className="text-gray-800 text-sm hover:text-[#a3248e] transition-colors break-all"
            >
              LORENIUS@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}