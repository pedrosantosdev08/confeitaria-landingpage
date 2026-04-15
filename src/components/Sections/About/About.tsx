import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutCard } from "../../UI/AboutCard/AboutCard";
import { faHeart, faLeaf, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion, type Variants } from "framer-motion";
import CupCakeImage from "../../../assets/cupcake-image.jpg";

const CardAbout = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faLeaf} />,
    title: "Ingredientes Premium",
    desc: "Chocolate belga, frutas frescas e manteiga francesa. Apenas o melhor para seus doces.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: "Feito com Amor",
    desc: "Cada doce é preparado manualmente com técnicas refinadas de confeitaria francesa.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Receita de Família",
    desc: "Tradição francesa passada por gerações. Segredos da pâtisserie que encantam paladares.",
  },
];

// Variantes para o container pai
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Variantes para os itens (texto e cards)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Variantes específica para a imagem (fade + scale)
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="sobre" className="bg-(--background) py-24 px-6 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:gap-24"
      >
        {/* Título e Texto */}
        <div className="flex w-full flex-col items-center text-center">
          <motion.h2 
            variants={itemVariants}
            className="m-0 max-w-4xl font-heading text-[clamp(2.5rem,7vw,4rem)] font-bold tracking-tight text-(--text-dark) leading-tight"
          >
            A <span className="text-primary">arte</span> da confeitaria francesa em cada doce
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            <p>
              Nossa jornada começou quando minha avó, uma confeiteira parisiense,
              trouxe consigo não apenas receitas secretas, mas uma verdadeira
              filosofia:{" "}
              <span className="text-primary font-semibold italic">
                doce bom é arte comestível.
              </span>{" "}
              Cada camada de ganache, cada piping de chantilly, cada cristalização
              de açúcar é executada com a precisão e o cuidado de um artesão.
            </p>
            <p className="mt-6">
              Hoje, mantemos viva essa tradição de excelência. O sabor delicado
              que surpreende em cada mordida é o mesmo que encantava as
              confeitarias da Provence.{" "}
              <span className="text-primary font-semibold">
                É essa maestria que entregamos a você.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Grid de Cards Animado */}
        <motion.div 
          variants={itemVariants}
          className="flex w-full flex-wrap justify-center gap-8"
        >
          {CardAbout.map((item) => (
            <AboutCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </motion.div>

        {/* Imagem com Revelação Suave */}
        <motion.picture 
          variants={imageVariants}
          className="w-full"
        >
          <img
            src={CupCakeImage}
            alt="Processo artesanal"
            className="block h-96 w-full rounded-3xl object-cover object-center transition-all duration-500 hover:scale-[1.02] hover:brightness-75 md:h-[500px] shadow-xl"
          />
        </motion.picture>
      </motion.div>
    </section>
  );
}