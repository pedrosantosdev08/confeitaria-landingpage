import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type TestimonialsCardProps = {
  message: string;
  nameClient: string;
  address: string;
};

export function TestimonialsCard({
  message,
  nameClient,
  address,
}: TestimonialsCardProps) {
  return (
    <div
      className="
      group relative flex w-full max-w-[450px] flex-col gap-6 rounded-[24px] border border-black/5 bg-white p-10 
      shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out 
      hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(181,136,99,0.1)] 
      max-md:p-[30px]
    "
    >
      {/* Container das Estrelas */}
      <div className="flex gap-[6px] text-[#b58863] text-[0.95rem]">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="drop-shadow-[0_2px_4px_rgba(181,136,99,0.15)]"
          />
        ))}
      </div>

      {/* A Mensagem (Aspas) */}
      <p
        className="
        relative font-heading text-[1.3rem] italic leading-[1.7] text-[#333] 
        before:absolute before:-top-5 before:-left-3.75 before:text-[3rem] before:text-[#b58863] before:opacity-10 before:content-['\22']
        max-md:text-[1.1rem]
      "
      >
        {message}
      </p>

      {/* Rodapé com Informações do Cliente */}
      <div className="flex flex-col gap-1 border-t border-[#f5f5f5] pt-5">
        <p className="m-0 text-[0.95rem] font-bold tracking-[0.08em] uppercase text-[#1a1a1a]">
          {nameClient}
        </p>
        <p className="m-0 text-[0.85rem] text-[#999]">{address}</p>
      </div>
    </div>
  );
}
