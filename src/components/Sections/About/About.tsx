import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutCard } from "../../UI/AboutCard/AboutCard";
import "./About.css";
import { faHeart, faLeaf, faUser } from "@fortawesome/free-solid-svg-icons";
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

export function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-title">
          <h2>
            A <span>arte</span> da confeitaria francesa em cada doce
          </h2>
          <p>
            Nossa jornada começou quando minha avó, uma confeiteira parisiense,
            trouxe consigo não apenas receitas secretas, mas uma verdadeira
            filosofia: <span>doce bom é arte comestível.</span> Cada camada de
            ganache, cada piping de chantilly, cada cristalização de açúcar é
            executada com a precisão e o cuidado de um artesão.
          </p>
          <br />
          <p>
            Hoje, mantemos viva essa tradição de excelência. O sabor delicado
            que surpreende em cada mordida é o mesmo que encantava as
            confeitarias da Provence.{" "}
            <span>É essa maestria que entregamos a você.</span>
          </p>
        </div>

        <div className="card-container">
          <div className="card-content">
            {CardAbout.map((item) => (
              <AboutCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                id={0}
              />
            ))}
          </div>
        </div>

        <picture>
          <source media="(max-width: 768px)" src={CupCakeImage} />{" "}
          
          <img src={CupCakeImage} alt="Sobre mim" /> 
        </picture>
      </section>
    </>
  );
}
