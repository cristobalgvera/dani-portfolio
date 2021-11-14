import { render } from '@testing-library/react';
import { IHeaderLink } from '../../../../../shared/types/header/IHeaderLink';
import { HeaderLink } from './HeaderLink';

const baseHeaderLink: IHeaderLink = {
  href: '#test',
  title: 'test',
};

let headerLink: IHeaderLink;

describe('HeaderLink', () => {
  beforeEach(() => {
    headerLink = { ...baseHeaderLink };
  });

  it('should render a menuitem role with custom header title', () => {
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const menuItemElement = getByRole('menuitem');
    expect(menuItemElement).toHaveTextContent(headerLink.title);
  });

  it('should render a link role with custom header href', () => {
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', headerLink.href);
  });

  it('should not include target attribute in link role if no target attribute is passed', () => {
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const linkElement = getByRole('link');
    expect(linkElement).not.toHaveAttribute('target');
  });

  it('should include target attribute in link role if target attribute is passed', () => {
    headerLink.target = '_blank';
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('target', headerLink.target);
  });

  it('should not include rel attribute in link role if no rel attribute is passed', () => {
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const linkElement = getByRole('link');
    expect(linkElement).not.toHaveAttribute('rel');
  });

  it('should include rel attribute in link role if rel attribute is passed', () => {
    headerLink.rel = 'noreferrer';
    const { getByRole } = render(<HeaderLink link={headerLink} />);
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('rel', headerLink.rel);
  });
});
