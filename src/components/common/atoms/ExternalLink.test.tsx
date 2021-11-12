import { render } from '@testing-library/react';
import { ExternalLink } from './ExternalLink';

const externalLink = 'https://www.test.com';

describe('ExternalLink', () => {
  it('should render a link with proper href attribute', () => {
    const { getByRole } = render(<ExternalLink href={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', externalLink);
  });

  it('should render a link with _blank target attribute', () => {
    const { getByRole } = render(<ExternalLink href={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should have external link icon', () => {
    const { getByRole } = render(<ExternalLink href={externalLink} />);
    const link = getByRole('link');
    expect(link).toContainHTML('<svg');
  });
});
