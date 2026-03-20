import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WhatsappBtn.css"

const telefone = "5581996836374";
const mensagem = "Olá! Gostaria de fazer uma encomenda e me interessei pelos bolos e kits festa. Como funciona o prazo de entrega e a disponibilidade para esta semana?";
const urlFinal = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export function WhatsappBtn() {
  return (
    <a 
      href={urlFinal} 
      className="btn-whats" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon-wpp"/>
    </a>
  );
}