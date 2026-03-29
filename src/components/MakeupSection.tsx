import { motion } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";

export default function MakeupSection() {
  const categories = [
    { name: "Labios", img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=400" },
    { name: "Rostro", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400" },
    { name: "Ojos", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400" },
    { name: "Accesorios", img: "https://images.unsplash.com/photo-1522338223523-d2d23e5fa35c?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section id="maquillaje" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-taupe font-semibold uppercase tracking-[0.2em] text-xs">Arte y Color</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810]">Realzá tu <span className="italic text-brand-taupe">belleza</span> natural.</h2>
          <p className="text-[#6b4c3b] text-lg">
            El maquillaje es tu herramienta de expresión. Descubrí texturas y tonos que iluminan tu rostro y potencian tu confianza diaria.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg cursor-pointer bg-[#f0e2d8]"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1522338223523-d2d23e5fa35c?auto=format&fit=crop&q=80&w=400`;
                  target.onerror = null;
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/10 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-2">{cat.name}</h3>
                <div className="flex items-center gap-2 text-brand-taupe text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver más</span>
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/50672952666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-taupe text-white px-10 py-4 rounded-full text-base font-bold shadow-xl shadow-brand-taupe/20 transition-all hover:bg-brand-rose"
          >
            <MessageCircle className="w-5 h-5" />
            Ver Catálogo de Maquillaje
          </motion.a>
        </div>
      </div>
    </section>
  );
}
