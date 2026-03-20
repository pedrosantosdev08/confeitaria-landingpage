import "./CatalogCard.css";

type CatalogCardProps = {
  id: number;
  image: string;
  title: string;
  desc: string;
  itemsList: string[];
};

export function CatalogCard({ image, title, desc, itemsList }: CatalogCardProps) {
  return (
    <div className="catalogCard-container">
      <div className="catalogCard-image">
        <img src={image} alt={title} />
      </div>
      
      <div className="catalogCard-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>
              <span className="dot">•</span> {item}
            </li>
          ))}
        </ul>
        
        {/* O traço decorativo da imagem */}
        <div className="catalogCard-divider"></div>
      </div>
    </div>
  );
}