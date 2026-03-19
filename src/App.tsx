import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import PerfumeSection from "./components/PerfumeSection";
import MakeupSection from "./components/MakeupSection";
import SkincareSection from "./components/SkincareSection";
import ValueProp from "./components/ValueProp";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import GiftsSection from "./components/GiftsSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="relative">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        
        <PerfumeSection />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="h-px w-24 bg-brand-rose/30 mx-auto mb-8" />
            <p className="font-serif italic text-2xl text-stone-400 max-w-2xl mx-auto">
              "La elegancia es la única belleza que nunca se desvanece."
            </p>
          </div>
        </section>

        <MakeupSection />
        <SkincareSection />
        <ValueProp />
        <FeaturedProducts />
        <Testimonials />
        <GiftsSection />
        
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24 bg-brand-nude relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                ¿Lista para realzar tu <span className="italic">belleza</span>?
              </h2>
              <p className="text-stone-600 text-xl">
                Escribinos hoy mismo por WhatsApp y recibí asesoría personalizada. Estamos en Costa Rica para servirte con amor y detalle.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/50672952666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-stone-900 text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl shadow-stone-300 transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chatear con Livel Beauty
                </motion.a>
                
                <div className="flex items-center gap-8 text-stone-400 text-sm uppercase tracking-[0.2em] font-medium">
                  <span>7295-2666</span>
                  <div className="w-1 h-1 rounded-full bg-stone-300" />
                  <span>Facebook: Livel Beauty</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-stone-900 rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-stone-900 rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
