import LogoManuConfeitaria from "../../../assets/logo-manu.png";

const telefone = "5581996836374";
const mensagem =
  "Olá! Gostaria de fazer uma encomenda e me interessei pelos bolos e kits festa.";
const urlFinal = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export function Footer() {
  return (
    <footer className="bg-[#2C2416] px-6 pt-15 pb-10 text-white font-heading">
      <div className="mx-auto flex max-w-300 flex-col gap-12.5 text-center md:flex-row md:flex-wrap sm:flex-col md:text-center">
        {/* Header do Footer - Responsivo */}
        <div className="flex-1 min-w-full md:min-w-100">
          
          <div className="flex flex-col items-center  justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            
            <img
              className="h-16 w-auto md:h-20 lg:h-24"
              src={LogoManuConfeitaria}
              alt="Logo Manu Confeitaria"
            />
            
            <h2 className="text-[clamp(1.3rem,5vw,3.5rem)] font-medium mb-0 text-center ">
              Manu Confeitaria
            </h2>
          </div>
          
          <p className="mb-5 mt-5 text-[1.3rem] leading-normal opacity-90 text-center ">
            Onde o sabor artesanal encontra a dedicação em cada detalhe. Doces
            premium e encomendas exclusivas, direto de Olinda para sua
            celebração.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-3.75 text-[1.3rem] font-semibold">Links Rápidos</h3>
          <ul className="list-none p-0 text-center md:text-left">
            <li className="mb-3 text-[1.05rem] opacity-90">
              <a
                href="#catálogo"
                className="text-white no-underline hover:opacity-70 transition-opacity"
              >
                Nossos Produtos
              </a>
            </li>
            <li className="mb-3 text-[1.05rem] opacity-90">
              <a
                href={urlFinal}
                target="_blank"
                rel="noreferrer"
                className="text-white no-underline hover:opacity-70 transition-opacity"
              >
                Fazer Pedido
              </a>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-3.75 text-[1.3rem] font-semibold">Contato</h3>
          <ul className="list-none p-0 text-center md:text-left">
            <li className="mb-3 text-[1.05rem] opacity-90">(81) 98395-2476</li>
            <li className="mb-3 text-[1.05rem] opacity-90">
              contato@confeitariaartesanal.com
            </li>
            <li className="mb-3 text-[1.05rem] opacity-90">Olinda - PE</li>
          </ul>
        </div>

        
        <div className="mt-5 w-full border-t border-white/10 pt-6.25 text-base leading-[1.6] opacity-70 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Confeitaria Artesanal. Todos os
            direitos reservados. Feito com amor e ingredientes premium.
          </p>
        </div>
      </div>
    </footer>
  );
}