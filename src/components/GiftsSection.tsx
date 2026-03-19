import { motion } from "motion/react";
import { Gift, Heart, Sparkles } from "lucide-react";

export default function GiftsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-stone-900 rounded-[60px] p-8 md:p-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-taupe/20 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-rose/10 rounded-full blur-3xl -z-0" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-blush text-xs font-semibold uppercase tracking-widest">
                <Gift className="w-3 h-3" />
                Momentos Especiales
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Un detalle para <span className="italic text-brand-blush">vos</span> o para alguien especial.</h2>
              <p className="text-stone-300 text-lg leading-relaxed max-w-lg">
                Perfumes, maquillaje y belleza presentados como una experiencia de lujo. Ideal para consentirte o para regalar ese detalle inolvidable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-brand-blush" />
                  </div>
                  <span className="text-sm font-medium">Empaque de Regalo</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand-blush" />
                  </div>
                  <span className="text-sm font-medium">Asesoría Personalizada</span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/50672952666?text=Hola! Quiero consultar por opciones de regalo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-blush text-stone-900 px-10 py-4 rounded-full text-base font-bold shadow-xl transition-all"
              >
                Consultar por WhatsApp
              </motion.a>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="rounded-[40px] overflow-hidden shadow-2xl aspect-square"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800" 
                  alt="Gifts" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Floating element */}
              <div className="absolute -bottom-10 -right-10 hidden md:block">
                <div className="glass-effect p-6 rounded-3xl shadow-2xl border-brand-rose/20">
                  <p className="text-stone-900 font-serif font-bold text-xl">Livel Beauty</p>
                  <p className="text-stone-500 text-xs uppercase tracking-widest">Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
