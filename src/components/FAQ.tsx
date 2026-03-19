import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Cómo hago mi pedido?",
      a: "Es muy simple. Solo hacés clic en el botón de WhatsApp, nos indicás qué producto te interesa y coordinamos el pago y envío de inmediato."
    },
    {
      q: "¿Tienen envíos a todo el país?",
      a: "Sí, realizamos envíos a todo Costa Rica. Coordinamos con vos la mejor opción de entrega según tu ubicación."
    },
    {
      q: "¿Los productos son originales?",
      a: "Totalmente. En Livel Beauty solo trabajamos con productos 100% originales y seleccionados bajo altos estándares de calidad."
    },
    {
      q: "¿Me ayudan a elegir un perfume?",
      a: "¡Claro! Nos encanta asesorar a nuestras clientas. Escribinos por WhatsApp contándonos qué notas te gustan y te daremos las mejores recomendaciones."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Preguntas <span className="italic">Frecuentes</span></h2>
            <p className="text-stone-600">Todo lo que necesitás saber para tu próxima compra.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-serif font-medium text-stone-800 group-hover:text-brand-taupe transition-colors">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-nude flex items-center justify-center text-brand-taupe">
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-stone-600 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
