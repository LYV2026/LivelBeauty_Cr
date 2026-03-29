import { Truck, ShieldCheck, Heart, Clock } from "lucide-react";

export default function TrustBar() {
  const items = [
    { icon: <Truck className="w-5 h-5" />, title: "Envíos a todo CR", desc: "Coordinamos tu entrega" },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "100% Confiable", desc: "Productos originales" },
    { icon: <Heart className="w-5 h-5" />, title: "Atención Personal", desc: "Asesoría por WhatsApp" },
    { icon: <Clock className="w-5 h-5" />, title: "Rapidez", desc: "Pedidos listos hoy" },
  ];

  return (
    <section className="bg-[#fffaf7] border-y border-[#e8d5c8] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand-taupe mb-1">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-[#2c1810] uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs text-[#6b4c3b]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
