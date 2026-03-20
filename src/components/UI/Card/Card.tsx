import "./Card.css";

type CardProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function Card({ icon, title, desc }: CardProps) {
  return (
    <div className="meu-card">
      <div className="icone">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
