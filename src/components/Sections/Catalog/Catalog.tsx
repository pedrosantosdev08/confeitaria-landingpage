import { motion } from "motion/react";
import { CatalogCard } from "../../UI/CatalogCard/CatalogCard";


const MyCatalog = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500",
    title: "Bolos & Tortas Gourmet",
    desc: "Criações exclusivas que são verdadeiras obras de arte comestíveis. Cada fatia é uma explosão de sabor e textura.",
    itemsList: [
      "Bolo Red Velvet com cream cheese",
      "Torta Ópera com camadas de café",
      "Cheesecake de frutas vermelhas",
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=500",
    title: "Confeitaria Francesa",
    desc: "A delicadeza dos clássicos parisienses feitos com farinha de amêndoas e técnicas tradicionais.",
    itemsList: [
      "Macarons de Pistache",
      "Éclair de Chocolate Belga",
      "Tartalette de Limão Siciliano",
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=500",
    title: "Doces Assinados",
    desc: "Nossa linha exclusiva de sobremesas que combinam frescor e sofisticação para momentos especiais.",
    itemsList: [
      "Petit Gateau de Doce de Leite",
      "Mil Folhas de Baunilha",
      "Banoffee desconstruída",
    ],
  },
];


export function Catalog() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      
    >
      <div id="catálogo" 
      className="flex min-h-screen flex-col items-center gap-12.5 bg-[#FFFEFE] px-5 py-15 md:gap-20 md:py-25">
        {/* Título da Seção */}
        <div className="flex w-full max-w-300 flex-col items-center gap-6 text-center">
          <h2 className="m-0 font-heading text-[clamp(2.8rem,7vw,4.2rem)] font-bold tracking-tight text-[#2d2d2d] leading-[1.1]">
            Nossos <span className="font-normal italic text-primary">Destaques</span>
          </h2>
          <p className="m-0 max-w-162.5 text-[1.15rem] leading-[1.6] text-[#666]">
            Cada categoria reflete nossa paixão por sabores autênticos e qualidade incomparável
          </p>
        </div>
        {/* Wrapper dos Cards */}
        <div className="mx-auto flex w-full max-w-300 flex-col gap-10 md:gap-25 md:py-15">
          {MyCatalog.map((catalogItem) => (
            <CatalogCard
              key={catalogItem.id}
              image={catalogItem.image}
              title={catalogItem.title}
              desc={catalogItem.desc}
              itemsList={catalogItem.itemsList}
              id={catalogItem.id}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
