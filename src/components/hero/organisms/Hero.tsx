import { HeroAnimation } from '../atoms/HeroAnimation';
import { HeroGreet } from '../atoms/HeroGreet';
import { HERO_DATA } from '../../../data';

const Hero = () => {
  return (
    <section className="relative my-16 px-5 flex flex-col flex-wrap">
      <HeroAnimation />
      <div className="absolute bottom-0">
        <HeroGreet name={HERO_DATA.NAME} description={HERO_DATA.DESCRIPTION} />
      </div>
    </section>
  );
};

export default Hero;
