import { render } from '@testing-library/react';
import { HeroAnimation } from './HeroAnimation';

jest.mock('../../../hooks/useLottie', () => ({
  useLottie: () => ({
    container: { current: null },
  }),
}));

describe('HeroAnimation', () => {
  it('should have an animation container div', () => {
    const { getByRole } = render(<HeroAnimation />);
    const element = getByRole('figure');
    expect(element).toBeInTheDocument();
  });
});
