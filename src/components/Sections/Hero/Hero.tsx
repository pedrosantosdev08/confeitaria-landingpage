import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Hero() {
  return (
    <>
      <section className="hero-container">
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
            <a href="">
              Quero encomendar meus doces <FontAwesomeIcon icon={faRightLong} />
            </a>
          </button>
          <button className="btn-secondary">
            <a href="">Ver Nossos Doces</a>
          </button>
        </div>
      </section>
      
    </>
  );
}
