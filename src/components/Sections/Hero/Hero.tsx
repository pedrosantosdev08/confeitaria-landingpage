import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, type Variants } from "framer-motion"; // Ajustado para o import padrão mais comum

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada filho demora 0.2s a mais que o anterior
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom ease-out
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center gap-10 bg-[#EDE5DE] p-5 text-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* Título com animação de subida */}
        <motion.h1 
          variants={itemVariants}
          className="m-0 max-w-5xl font-heading text-[clamp(3.5rem,10vw,7.5rem)] font-extrabold tracking-tight text-(--text-dark) leading-[0.95]"
        >
          Cada Momento especial merece um{" "}
          <span className="text-primary italic">doce artesanal</span> feito com amor
        </motion.h1>

        {/* Parágrafo com leve atraso */}
        <motion.p 
          variants={itemVariants}
          className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl"
        >
          Doces finos e sobremesas artesanais, feitas à mão com ingredientes nobres.
          <br className="hidden md:block" />
          Tradição francesa que transforma celebrações em memórias inesquecíveis.
        </motion.p>

        {/* Grupo de botões com animação suave */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <button className="group flex cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            <a href="#" className="flex items-center gap-2">
              Quero encomendar meus doces
              <FontAwesomeIcon icon={faRightLong} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </button>

          <button className="group cursor-pointer rounded-full border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-95">
            <a href="#catálogo">Ver Nossos Doces</a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}