import { motion } from "motion/react";
import { MessageCircle, Menu, X, ShoppingBag, Sparkles, Heart, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Perfumes", href: "#perfumes" },
    { name: "Maquillaje", href: "#maquillaje" },
    { name: "Skin Care", href: "#skincare" },
    { name: "Destacados", href: "#destacados" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter text-stone-900"
          >
            LIVEL <span className="font-light italic text-brand-taupe">BEAUTY</span>
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-brand-taupe transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/50672952666"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </motion.a>

          <button
            className="md:hidden p-2 text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-stone-800 py-2 border-b border-stone-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/50672952666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-xl font-medium mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            Escribinos por WhatsApp
          </a>

          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-stone-50">
            <a href="https://www.facebook.com/mystiqueCR20" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-brand-taupe transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/livel_beauty" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-brand-taupe transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
