import Lottie, {
  AnimationConfigWithData,
  AnimationConfigWithPath,
} from 'lottie-web';
import { useEffect, useRef } from 'react';

type PartialAnimationConfigWithPath = Partial<
  Omit<AnimationConfigWithPath, 'path'>
>;
type PartialAnimationConfigWithData = Partial<
  Omit<AnimationConfigWithData, 'animationData'>
>;

type AnimationConfig = Omit<
  PartialAnimationConfigWithData | PartialAnimationConfigWithPath,
  'container'
>;

interface LottieHook {
  animationData: unknown;
  animationConfig?: AnimationConfig;
}

export const useLottie = ({ animationData, animationConfig }: LottieHook) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
      ...animationConfig,
    });

    Lottie.setSpeed(0.5);

    return () => Lottie.destroy();
  }, []);

  return { container };
};
