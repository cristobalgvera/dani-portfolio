import { render } from '@testing-library/react';
import { IExternalLink } from '../../../shared/types/common/IExternalLink';
import { ExternalLinkIcon } from './ExternalLinkIcon';

const href = 'https://www.test.com';
const icon = <div>test</div>;

const baseExternalLink: IExternalLink = {
  href,
};

let externalLink: IExternalLink;

describe('ExternalLinkIcon', () => {
  beforeEach(() => {
    externalLink = { ...baseExternalLink };
  });

  it('should render a link with proper href attribute', () => {
    const { getByRole } = render(<ExternalLinkIcon link={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', href);
  });

  it('should render a link with _blank target attribute', () => {
    const { getByRole } = render(<ExternalLinkIcon link={externalLink} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should have external link icon', () => {
    const { getByRole } = render(<ExternalLinkIcon link={externalLink} />);
    const link = getByRole('link');
    expect(link).toContainHTML('<svg');
  });

  it('should render icon provided', () => {
    externalLink.Icon = icon;
    const { getByRole } = render(<ExternalLinkIcon link={externalLink} />);
    const link = getByRole('link');
    expect(link).toContainHTML('test');
  });
});
