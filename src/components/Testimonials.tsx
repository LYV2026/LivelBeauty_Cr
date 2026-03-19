import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María Fernanda Q.",
      text: "Me encantó el perfume que pedí, es 100% original y la presentación venía preciosa. La atención por WhatsApp fue súper rápida.",
      rating: 5
    },
    {
      name: "Valeria S.",
      text: "El maquillaje tiene una calidad increíble. Me asesoraron súper bien para elegir mi tono de labial. ¡Súper recomendadas!",
      rating: 5
    },
    {
      name: "Lucía M.",
      text: "Buscaba un regalo especial y en Livel Beauty encontré el combo perfecto. A mi hermana le encantó todo. ¡Gracias por el detalle!",
      rating: 5
    },
    {
      name: "Elena R.",
      text: "Es mi tienda favorita en Costa Rica. Siempre tienen lo último y los envíos son muy coordinados. Confianza total.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-brand-nude/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-taupe font-semibold uppercase tracking-[0.2em] text-xs">Experiencias Reales</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Lo que dicen nuestras <span className="italic">clientas</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-blush/40 -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="flex gap-1 text-brand-rose">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-700 text-lg italic leading-relaxed font-serif">"{t.text}"</p>
                <div className="pt-4 border-t border-stone-50">
                  <p className="font-bold text-stone-900 uppercase tracking-widest text-sm">{t.name}</p>
                  <p className="text-xs text-stone-400">Clienta Verificada</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
