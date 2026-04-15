import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const telefone = "5581996836374";
const mensagem =
  "Olá! Gostaria de fazer uma encomenda e me interessei pelos bolos e kits festa. Como funciona o prazo de entrega e a disponibilidade para esta semana?";
const urlFinal = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export function WhatsappBtn() {
  return (
    <a
      href={urlFinal}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="
        fixed bottom-5 right-5 z-9999 
        flex h-15 w-15 items-center justify-center 
        rounded-full bg-white text-[#25d366] 
        shadow-[0_4px_12px_rgba(0,0,0,0.2)] 
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]
        animate-pulsar
        max-[477px]:h-[40px] max-[477px]:w-[40px]
        group
      "
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        className="
          text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] 
          transition-colors duration-300
          group-hover:bg-[#25d366] group-hover:text-white group-hover:rounded-full
          max-[477px]:text-xl
        "
      />
    </a>
  );
}
