import { motion } from "motion/react";
import { MessageCircle, Star } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Base Beyond Matte",
      category: "Maquillaje",
      desc: "Base mate de alta cobertura, ligera, duradera y acabado natural impecable.",
      price: "₡8,500",
      img: "/base_matte.jpg"
    },
    {
      name: "The Nude Fantasia Eyeshadow Palette",
      category: "Maquillaje",
      desc: "Paleta versátil con tonos cálidos, vibrantes y encantadores.",
      price: "₡13,500",
      img: "/paleta_amore_us.jpg"
    },
    {
      name: "My BFF Matte Concealer",
      category: "Maquillaje",
      desc: "Corrector mate de alta cobertura, ligero, uniforme y duradero.",
      price: "₡4,000",
      img: "/corrector.jpg"
    },
    {
      name: "Hydra Serum",
      category: "Skin Care",
      desc: "Hidratación profunda con ácido hialurónico puro.",
      price: "₡22,000",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="destacados" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-brand-taupe font-semibold uppercase tracking-[0.2em] text-xs">Favoritos de la temporada</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Productos <span className="italic">Destacados</span></h2>
          </div>
          <motion.a
            whileHover={{ x: 5 }}
            href="https://wa.me/50672952666"
            className="text-stone-900 font-bold uppercase tracking-widest text-sm border-b-2 border-brand-rose pb-1"
          >
            Ver Catálogo Completo
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if attachment fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-taupe">
                  {product.category}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1 text-brand-rose">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900">{product.name}</h3>
                <p className="text-stone-500 text-sm line-clamp-2">{product.desc}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-serif font-bold text-stone-900">{product.price}</span>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://wa.me/50672952666?text=Hola! Me interesa el producto: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-brand-taupe transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
