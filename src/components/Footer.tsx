import { MessageCircle, Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-nude/30 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-3xl font-serif font-bold tracking-tighter text-stone-900">
              LIVEL <span className="font-light italic text-brand-taupe">BEAUTY</span>
            </div>
            <p className="text-stone-600 max-w-sm leading-relaxed">
              Tu boutique de belleza premium en Costa Rica. Realzamos tu esencia con la mejor selección de perfumería y maquillaje.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/mystiqueCR20" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-900 hover:bg-brand-taupe hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/livel_beauty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-900 hover:bg-brand-taupe hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-sm">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-stone-600 hover:text-brand-taupe transition-colors text-sm">Inicio</a></li>
              <li><a href="#perfumes" className="text-stone-600 hover:text-brand-taupe transition-colors text-sm">Perfumes</a></li>
              <li><a href="#maquillaje" className="text-stone-600 hover:text-brand-taupe transition-colors text-sm">Maquillaje</a></li>
              <li><a href="#skincare" className="text-stone-600 hover:text-brand-taupe transition-colors text-sm">Skin Care</a></li>
              <li><a href="#destacados" className="text-stone-600 hover:text-brand-taupe transition-colors text-sm">Destacados</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/50672952666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-brand-taupe transition-colors text-sm group">
                  <Phone className="w-4 h-4 text-brand-taupe group-hover:scale-110 transition-transform" />
                  7295-2666
                </a>
              </li>
              <li>
                <a href="https://wa.me/50672952666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-brand-taupe transition-colors text-sm group">
                  <MessageCircle className="w-4 h-4 text-brand-taupe group-hover:scale-110 transition-transform" />
                  WhatsApp Directo
                </a>
              </li>
              <li className="flex items-center gap-3 text-stone-600 text-sm">
                <MapPin className="w-4 h-4 text-brand-taupe" />
                Envíos a todo Costa Rica
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Livel Beauty. Mística y Bella.
          </p>
          <p className="text-stone-400 text-xs uppercase tracking-widest italic">
            Diseñado con delicadeza en Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}
