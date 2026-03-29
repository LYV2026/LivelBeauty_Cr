import { motion } from "motion/react";
import { MessageCircle, Sparkles, Heart } from "lucide-react";

export default function SkincareSection() {
  const products = [
    { name: "Sérums", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
    { name: "Cremas", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" },
    { name: "Limpieza", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400" },
    { name: "Mascarillas", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section id="skincare" className="py-24 bg-[#fffaf7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <span className="text-brand-taupe font-semibold uppercase tracking-[0.2em] text-xs">Cuidado de la Piel</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] leading-tight">
              Tu piel merece un <span className="italic text-brand-taupe">ritual</span> de amor.
            </h2>
            <p className="text-[#6b4c3b] text-lg leading-relaxed">
              Descubrí nuestra selección de productos diseñados para nutrir, proteger e iluminar tu rostro. Porque una piel sana es la base de toda belleza.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-brand-surface px-4 py-2 rounded-full text-sm text-[#2c1810]">
                <Sparkles className="w-4 h-4 text-brand-taupe" />
                <span>Resultados Reales</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-surface px-4 py-2 rounded-full text-sm text-[#2c1810]">
                <Heart className="w-4 h-4 text-brand-taupe" />
                <span>Asesoría Personalizada</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-square shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#2c1810]/30 group-hover:bg-[#2c1810]/50 transition-colors flex items-center justify-center">
                  <h3 className="text-white font-serif text-xl md:text-2xl">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/50672952666?text=Hola! Me gustaría consultar sobre productos de Skin Care."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-taupe text-white px-10 py-4 rounded-full text-base font-bold shadow-xl shadow-brand-taupe/20 transition-all hover:bg-brand-rose"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar Catálogo de Skin Care
          </motion.a>
        </div>
      </div>
    </section>
  );
}
