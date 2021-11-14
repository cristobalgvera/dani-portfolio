import { render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  it('should render children provided', () => {
    const { getByText } = render(<Layout>Hello World</Layout>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
