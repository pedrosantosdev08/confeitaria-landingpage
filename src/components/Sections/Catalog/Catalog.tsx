import { CatalogCard } from "../../UI/CatalogCard/CatalogCard";
import "./Catalog.css";

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
    <section className="catalog-container">
      <div className="catalog-title">
        <h2>
          Nossos <span>Destaques</span>
        </h2>
        <p>
          Cada categoria reflete nossa paixão por sabores autênticos e qualidade
          incomparável
        </p>
      </div>

      <div className="cards-wrapper">
        {MyCatalog.map((catalogItem) => (
          <CatalogCard
            key={catalogItem.id}
            image={catalogItem.image}
            title={catalogItem.title}
            desc={catalogItem.desc}
            itemsList={catalogItem.itemsList}
            id={0}
          />
        ))}
      </div>
    </section>
  );
}
