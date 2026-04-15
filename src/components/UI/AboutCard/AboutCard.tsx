type CardProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function AboutCard({ icon, title, desc }: CardProps) {
  return (
    <div className="
      flex flex-1 flex-col gap-4 
      min-w-[300px] max-w-[380px] 
      rounded-[16px] border border-[#e2e8f0] bg-[var(--muted)] p-8 
      transition-all duration-300 ease-in-out 
      hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.247)]
    ">
      {/* Ícone */}
      <div className="mb-2 text-primary text-[2rem]">
        {icon}
      </div>

      {/* Título */}
      <h3 className="m-0 font-heading text-[1.5rem] text-[var(--text-dark)]">
        {title}
      </h3>

      {/* Descrição */}
      <p className="m-0 font-body text-base leading-[1.6] text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}