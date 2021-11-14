import { render } from '@testing-library/react';
import { IHeaderLink } from '../../../../../shared/types/header/IHeaderLink';
import { HeaderLinkList } from './HeaderLinkList';

const GOOGLE: IHeaderLink = {
  href: 'https://google.com',
  title: 'Google',
  target: '_blank',
  rel: 'noreferrer noopener',
};

const FACEBOOK: IHeaderLink = {
  href: 'https://facebook.com',
  title: 'Facebook',
  target: '_blank',
  rel: 'noreferrer noopener',
};

const INTERNAL_HEADER: IHeaderLink = {
  href: '#Internal',
  title: 'Internal',
};

const headers: IHeaderLink[] = [GOOGLE, FACEBOOK, INTERNAL_HEADER];

describe('HeaderLinkList', () => {
  it('should render three header links', () => {
    const { getByText, getAllByTestId } = render(
      <HeaderLinkList headers={headers} />,
    );

    expect(getByText(GOOGLE.title)).toBeInTheDocument();
    expect(getByText(FACEBOOK.title)).toBeInTheDocument();
    expect(getByText(INTERNAL_HEADER.title)).toBeInTheDocument();
    expect(getAllByTestId('header-link')).toHaveLength(3);
  });

  it('should render three header links with correct href', () => {
    const { getByText } = render(<HeaderLinkList headers={headers} />);

    expect(getByText(GOOGLE.title).closest('a')?.getAttribute('href')).toBe(
      GOOGLE.href,
    );
    expect(getByText(FACEBOOK.title).closest('a')?.getAttribute('href')).toBe(
      FACEBOOK.href,
    );
    expect(
      getByText(INTERNAL_HEADER.title).closest('a')?.getAttribute('href'),
    ).toBe(INTERNAL_HEADER.href);
  });

  it('should not render headers when no one it is passed', () => {
    const { queryAllByTestId } = render(<HeaderLinkList headers={[]} />);

    expect(queryAllByTestId('header-link')).toHaveLength(0);
  });

  it('should not have target attribute on internal header', () => {
    const { getByText } = render(<HeaderLinkList headers={headers} />);

    expect(
      getByText(INTERNAL_HEADER.title).closest('a')?.getAttribute('target'),
    ).toBe(null);
  });

  it('should not have rel attribute on internal header', () => {
    const { getByText } = render(<HeaderLinkList headers={headers} />);

    expect(
      getByText(INTERNAL_HEADER.title).closest('a')?.getAttribute('rel'),
    ).toBe(null);
  });

  it('should have target attribute on external header', () => {
    const { getByText } = render(<HeaderLinkList headers={headers} />);

    expect(getByText(GOOGLE.title).closest('a')?.getAttribute('target')).toBe(
      GOOGLE.target,
    );
  });

  it('should have rel attribute on external header', () => {
    const { getByText } = render(<HeaderLinkList headers={headers} />);

    expect(getByText(GOOGLE.title).closest('a')?.getAttribute('rel')).toBe(
      GOOGLE.rel,
    );
  });
});
