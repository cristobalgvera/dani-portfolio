import { render } from '@testing-library/react';
import { IExternalLink } from '../../../../shared/types/common/IExternalLink';
import { ProjectLinks } from './ProjectLinks';

const links: IExternalLink[] = [
  {
    href: 'https://www.github.com/',
    Icon: <span>github</span>,
  },
  {
    href: 'https://www.gitlab.com/',
    Icon: <span>gitlab</span>,
  },
];

describe('ProjectLinks', () => {
  it('should show all links provided', () => {
    const { getAllByRole } = render(<ProjectLinks links={links} />);
    links.forEach(({ href }) => {
      const anchorTag = getAllByRole('link').find(
        (anchor) => anchor.attributes.getNamedItem('href')?.value === href,
      );
      expect(anchorTag).toHaveAttribute('href', href);
    });
    expect(getAllByRole('link').length).toBe(links.length);
  });

  it('should not show links when no one is provided', () => {
    const { queryByRole } = render(<ProjectLinks links={[]} />);
    expect(queryByRole('link')).toBeNull();
  });
});
