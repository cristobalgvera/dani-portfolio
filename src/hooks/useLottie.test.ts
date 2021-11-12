import { renderHook } from '@testing-library/react-hooks';
import { useLottie } from './useLottie';
import animationData from '../assets/hero/astronaut.json';

describe('useLottie', () => {
  it('should return a non null container reference', () => {
    const {
      result: {
        current: { container },
      },
    } = renderHook(() => useLottie({ animationData }));
    expect(container.current).toBeDefined();
  });
});
