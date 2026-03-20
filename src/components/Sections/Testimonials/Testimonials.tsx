
import { TestimonialsCard } from "../../UI/TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";

const feedbacks = [
  {
    id: 1,
    message: "O Bolo Red Velvet é simplesmente o melhor que já provei. A textura da massa e o equilíbrio do doce são impecáveis.",
    nameClient: "Ana Beatriz",
    address: "Boa Viagem, Recife"
  },
  {
    id: 2,
    message: "Encomendei os macarons para o meu evento e foi um sucesso absoluto. Além de lindos, são deliciosos e muito frescos.",
    nameClient: "Carlos Eduardo",
    address: "Casa Forte, Recife"
  },
  {
    id: 3,
    message: "A atenção aos detalhes, desde a embalagem até o sabor final, mostra o carinho que colocam em cada doce. Recomendo muito!",
    nameClient: "Helena Souza",
    address: "Jardinópolis, PE"
  }
];

export function Testimonials() {
  return (
    <section className="testimonials-container">
      <div className="testimonials-title">
        <h2>O que nossos <span>clientes</span> dizem</h2>
        <p>Cada avaliação é um motivo de orgulho e nos inspira a fazer sempre melhor</p>
      </div>

      <div className="testimonials-grid">
        {feedbacks.map((item) => (
          <TestimonialsCard
            key={item.id}
            message={item.message}
            nameClient={item.nameClient}
            address={item.address}
          />
        ))}
      </div>
    </section>
  );
}