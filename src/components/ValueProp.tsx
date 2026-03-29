import { motion } from "motion/react";
import { Sparkles, Star, Zap, Heart, Shield, UserCheck } from "lucide-react";

export default function ValueProp() {
  const benefits = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Selección Curada", desc: "Solo productos que amamos y recomendamos con total confianza." },
    { icon: <UserCheck className="w-6 h-6" />, title: "Atención Cercana", desc: "No somos una tienda fría; te asesoramos personalmente por WhatsApp." },
    { icon: <Heart className="w-6 h-6" />, title: "Experiencia Femenina", desc: "Entendemos tus gustos y cuidamos cada detalle de tu pedido." },
    { icon: <Zap className="w-6 h-6" />, title: "Rapidez y Facilidad", desc: "Comprá sin complicaciones, directo desde tu celular." },
    { icon: <Star className="w-6 h-6" />, title: "Ideal para Regalo", desc: "Presentación impecable para sorprender a alguien especial." },
    { icon: <Shield className="w-6 h-6" />, title: "Confianza Total", desc: "Negocio local en Costa Rica con clientas satisfechas." },
  ];

  return (
    <section className="py-24 bg-brand-nude">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810]">¿Por qué elegir <span className="italic text-brand-taupe">Mystique Beauty</span>?</h2>
          <p className="text-[#6b4c3b] text-lg">
            Nos apasiona la belleza y nos importa tu experiencia. Aquí el detalle es nuestra prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-[#fffaf7] border border-[#e8d5c8] hover:shadow-xl hover:shadow-brand-taupe/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-surface flex items-center justify-center text-brand-taupe mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2c1810] uppercase tracking-wider mb-3">{benefit.title}</h3>
              <p className="text-[#6b4c3b] leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
