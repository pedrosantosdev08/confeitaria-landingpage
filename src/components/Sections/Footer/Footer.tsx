import "./Footer.css";

const telefone = "5581996836374";
const mensagem =
  "Olá! Gostaria de fazer uma encomenda e me interessei pelos bolos e kits festa.";
const urlFinal = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-header">
            <h2>Confeitaria Artesanal</h2>
            <p>
              Tradição francesa em cada doce. Bolos, tortas, macarons e
              chocolates artesanais feitos com paixão no coração de São Paulo.
            </p>
          </div>

          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul className="footer-list">
              <li>
                <a href="#catalog">Nossos Produtos</a>
              </li>

              <li>
                <a href={urlFinal} target="_blank" rel="noreferrer">
                  Fazer Pedido
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contacts">
            <h3>Contato</h3>
            <ul className="footer-list">
              <li>(81) 98395-2476</li>
              <li>contato@confeitariaartesanal.com</li>
              
              <li>Olinda - PE</li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Confeitaria Artesanal. Todos os
              direitos reservados. Feito com amor e ingredientes premium.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
