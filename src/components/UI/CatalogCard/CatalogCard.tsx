type CatalogCardProps = {
  id: number;
  image: string;
  title: string;
  desc: string;
  itemsList: string[];
};

export function CatalogCard({
  image,
  title,
  desc,
  itemsList,
}: CatalogCardProps) {
  return (
    <div className="group flex w-full flex-col items-start gap-12 bg-transparent lg:flex-row lg:items-center lg:gap-24 even:lg:flex-row-reverse">
      
      {/* Container da Imagem */}
      <div className="relative w-full overflow-hidden rounded-3xl shadow-sm transition-all duration-500 ease-in-out aspect-video lg:w-3/5 lg:min-h-96">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-75"
        />
      </div>

      {/* Conteúdo de Texto */}
      <div className="flex flex-col gap-3 text-left lg:w-2/5">
        <h3 className="m-0 font-heading text-4xl font-medium text-neutral-900 lg:text-5xl">
          {title}
        </h3>
        
        <p className="m-0 max-w-lg text-xl leading-relaxed text-neutral-500 lg:text-2xl">
          {desc}
        </p>

        <ul className="my-4 flex list-none flex-col gap-2 p-0">
          {itemsList.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-lg text-neutral-800 lg:text-xl">
              <span className="text-2xl text-primary leading-none">•</span> {item}
            </li>
          ))}
        </ul>

        {/* Divisor Decorativo */}
        <div className="mt-2 h-0.5 w-16 bg-primary"></div>
      </div>
    </div>
  );
}