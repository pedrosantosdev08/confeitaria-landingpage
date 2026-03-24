import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const telefone = "5581996836374";
const mensagem = "Olá! Gostaria de fazer uma encomenda e me interessei pelos bolos e kits festa. Como funciona o prazo de entrega e a disponibilidade para esta semana?";
const urlFinal = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export function Hero() {
  return (
    <>
      <section id="hero" className="hero-container">
        <div className="hero-title">
          <h1>
            Cada Momento especial merece um <span>doce artesanal</span> feito
            com amor
          </h1>
          <p>
            Doces finos e sobremesas artesanais, feitas à mão com ingredientes
            nobres.
            <br />
            Tradição francesa que transforma celebrações em memórias
            inesquecíveis.
          </p>
        </div>

        <div className="hero-btn">
          <button className="btn-primary">
            <a href={urlFinal} target="_blank">
              Quero encomendar meus doces <FontAwesomeIcon icon={faRightLong} />
            </a>
          </button>
          <button className="btn-secondary">
            <a href="#catalog">Ver Nossos Doces</a>
          </button>
        </div>
      </section>
      
    </>
  );
}
