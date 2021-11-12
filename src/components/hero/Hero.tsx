import { FC } from 'react';
import { HERO_DATA } from '../../data';
import { HeroAnimation } from './atoms/HeroAnimation';
import { HeroGreet } from './atoms/HeroGreet';

const Hero: FC = () => {
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
