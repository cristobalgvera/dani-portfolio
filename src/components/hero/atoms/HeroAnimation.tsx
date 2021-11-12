import { FC } from 'react';
import animationData from '../../../assets/hero/astronaut.json';
import { useLottie } from '../../../hooks/useLottie';

export const HeroAnimation: FC = () => {
  const { container } = useLottie({ animationData });

  return (
    <div className="ml-auto w-72 md:w-96 lg:w-2/5">
      <div className="container" ref={container}></div>
    </div>
  );
};
