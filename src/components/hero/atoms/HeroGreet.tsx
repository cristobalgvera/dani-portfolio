interface HeroGreetProps {
  name: string;
  description: string;
}

export const HeroGreet = ({ name, description }: HeroGreetProps) => {
  return (
    <div className="max-w-md mb-auto space-y-5">
      <h1 className="text-5xl font-semibold md:text-7xl">Hola, soy {name}</h1>
      <p className="px-2 tracking-wide leading-relaxed">{description}</p>
    </div>
  );
};
