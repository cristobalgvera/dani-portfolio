import { render } from '@testing-library/react';
import { ExternalLinkIcon } from './ExternalLinkIcon';

const externalLink = 'https://www.test.com';

describe('ExternalLinkIcon', () => {
  it('should render a link with proper href attribute', () => {
    const { getByRole } = render(<ExternalLinkIcon href={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', externalLink);
  });

  it('should render a link with _blank target attribute', () => {
    const { getByRole } = render(<ExternalLinkIcon href={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should have external link icon', () => {
    const { getByRole } = render(<ExternalLinkIcon href={externalLink} />);
    const link = getByRole('link');
    expect(link).toContainHTML('<svg');
  });

  it('should render icon provided', () => {
    const { getByRole } = render(
      <ExternalLinkIcon href={externalLink} Icon={<div>test</div>} />,
    );
    const link = getByRole('link');
    expect(link).toContainHTML('test');
  });
});
