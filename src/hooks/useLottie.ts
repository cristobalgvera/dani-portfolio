import { useEffect, RefObject, useRef } from 'react';
import Lottie, {
  AnimationConfigWithPath,
  AnimationConfigWithData,
} from 'lottie-web';

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
