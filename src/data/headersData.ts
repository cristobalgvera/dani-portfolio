import { SECTION } from '../shared/constants';
import { IHeaderLink } from '../shared/types/header/IHeaderLink';

export const HEADERS_DATA: IHeaderLink[] = [
  {
    href: `#${SECTION.EXPERIENCES}`,
    title: SECTION.EXPERIENCES,
  },
  {
    href: `#${SECTION.PROJECTS}`,
    title: SECTION.PROJECTS,
  },
  {
    href: `#${SECTION.SKILLS}`,
    title: SECTION.SKILLS,
  },
  {
    href: `#${SECTION.CONTACT}`,
    title: SECTION.CONTACT,
  },
  {
    href: 'https://www.google.com',
    title: 'Currículum',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
];
