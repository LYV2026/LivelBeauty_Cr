import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function PerfumeSection() {
  return (
    <section id="perfumes" className="py-24 bg-brand-ivory overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400" 
                  alt="Perfume 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl mt-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" 
                  alt="Perfume 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blush/20 rounded-full blur-3xl" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <span className="text-brand-taupe font-semibold uppercase tracking-[0.2em] text-xs">Colección de Fragancias</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">Descubrí tu <span className="italic">esencia</span> inolvidable.</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Un perfume es más que un aroma, es tu firma personal. En Livel Beauty seleccionamos fragancias que transmiten presencia, elegancia y feminidad.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-nude flex items-center justify-center shrink-0 text-brand-taupe font-serif italic text-xl">1</div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase tracking-wider text-sm mb-1">Fragancias Importadas</h4>
                  <p className="text-stone-500 text-sm">Selección exclusiva de las mejores casas de perfumería.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-nude flex items-center justify-center shrink-0 text-brand-taupe font-serif italic text-xl">2</div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase tracking-wider text-sm mb-1">Asesoría Olfativa</h4>
                  <p className="text-stone-500 text-sm">Te ayudamos a encontrar el aroma que mejor va con tu personalidad.</p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/50672952666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium shadow-xl shadow-stone-200 transition-all w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar Perfumes
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
