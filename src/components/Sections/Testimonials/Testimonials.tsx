import { TestimonialsCard } from "../../UI/TestimonialsCard/TestimonialsCard";
import { motion, type Variants } from "framer-motion";

const feedbacks = [
  {
    id: 1,
    message:
      "O Bolo Red Velvet é simplesmente o melhor que já provei. A textura da massa e o equilíbrio do doce são impecáveis.",
    nameClient: "Ana Beatriz",
    address: "Boa Viagem, Recife",
  },

  {
    id: 2,
    message:
      "Encomendei os macarons para o meu evento e foi um sucesso absoluto. Além de lindos, são deliciosos e muito frescos.",
    nameClient: "Carlos Eduardo",
    address: "Casa Forte, Recife",
  },

  {
    id: 3,
    message:
      "A atenção aos detalhes, desde a embalagem até o sabor final, mostra o carinho que colocam em cada doce. Recomendo muito!",
    nameClient: "Helena Souza",
    address: "Jardinópolis, PE",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre o surgimento de cada card
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-16 bg-[#F5EFE7] px-6 py-24 md:py-32">
      {/* Título com animação simples de subida */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-3 text-center"
      >
        <h2 className="m-0 font-heading text-[clamp(2.5rem,7vw,4rem)] font-normal text-neutral-900">
          O que nossos <span className="text-primary italic">clientes</span>{" "}
          dizem
        </h2>
        <p className="text-lg text-neutral-600 text-center">
          Cada avaliação é um motivo de orgulho e nos inspira a fazer sempre o
          melhor
        </p>
      </motion.div>

      {/* Grid de Cards com Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
      >
        {feedbacks.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="w-full flex justify-center"
          >
            <TestimonialsCard
              message={item.message}
              nameClient={item.nameClient}
              address={item.address}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
