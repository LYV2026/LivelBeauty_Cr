import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-nude">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blush/30 rounded-l-[100px] -z-10 hidden lg:block" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-brand-rose/10 rounded-full blur-3xl -z-10" 
      />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-brand-rose/20 text-brand-taupe text-xs font-semibold uppercase tracking-widest w-fit">
            <Sparkles className="w-3 h-3" />
            Mística y Bella
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-stone-900 text-balance">
            Realzá tu <span className="italic text-brand-taupe">esencia</span> con elegancia.
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
            Descubrí una selección curada de perfumería fina y maquillaje premium diseñada para la mujer moderna que valora la delicadeza y el detalle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/50672952666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium shadow-xl shadow-stone-200 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Pedí por WhatsApp
            </motion.a>
            
            <motion.a
              whileHover={{ x: 5 }}
              href="#destacados"
              className="flex items-center justify-center gap-2 text-stone-800 px-8 py-4 rounded-full text-base font-medium border border-stone-200 hover:bg-white transition-all"
            >
              Ver Colección
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-stone-200/50">
            <div>
              <p className="text-2xl font-serif font-bold text-stone-900">100%</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Original</p>
            </div>
            <div className="w-px h-8 bg-stone-200" />
            <div>
              <p className="text-2xl font-serif font-bold text-stone-900">Premium</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Calidad</p>
            </div>
            <div className="w-px h-8 bg-stone-200" />
            <div>
              <p className="text-2xl font-serif font-bold text-stone-900">Costa Rica</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Envíos</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-stone-100 flex items-center justify-center">
            <img 
              src="/livel-hero.png" 
              alt="Livel Beauty Hero" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.classList.add('bg-gradient-to-br', 'from-brand-blush', 'to-brand-rose/30');
                  const placeholder = document.createElement('div');
                  placeholder.className = 'flex flex-col items-center justify-center p-12 text-center space-y-4';
                  placeholder.innerHTML = `
                    <div class="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center mb-4">
                      <svg class="w-10 h-10 text-brand-taupe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h3 class="font-serif text-2xl text-stone-800 italic">Livel Beauty</h3>
                    <p class="text-sm text-stone-500 uppercase tracking-widest">Realzando tu esencia</p>
                  `;
                  parent.appendChild(placeholder);
                }
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass-effect p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <p className="text-brand-taupe font-serif italic text-lg leading-tight">"La belleza comienza en el momento que decides ser tú misma."</p>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-rose/30 rounded-full -z-10" />
          <div className="absolute bottom-20 -right-20 w-60 h-60 bg-brand-blush/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
