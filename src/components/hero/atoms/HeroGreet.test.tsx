import { render } from '@testing-library/react';
import { HeroGreet } from './HeroGreet';

describe('HeroGreet', () => {
  it('should show the correct name in the greeting', () => {
    const component = render(<HeroGreet name="John" description="" />);
    const greeting = component.getByText(/John/);
    expect(greeting).toBeInTheDocument();
  });

  it('should show the correct description in the greeting', () => {
    const { getByText } = render(
      <HeroGreet name="John" description="A cool guy" />,
    );
    expect(getByText('A cool guy')).toBeInTheDocument();
  });
});
