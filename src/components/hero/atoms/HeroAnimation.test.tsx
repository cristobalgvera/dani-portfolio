import { render } from '@testing-library/react';
import { useRef } from 'react';
import { HeroAnimation } from './HeroAnimation';

jest.mock('../../../hooks/useLottie', () => ({
  useLottie: () => ({
    container: useRef<HTMLDivElement>(null),
  }),
}));

describe('HeroAnimation', () => {
  it('should have an animation container div', () => {
    const { getByRole } = render(<HeroAnimation />);
    const element = getByRole('figure');
    expect(element).toBeInTheDocument();
  });
});
