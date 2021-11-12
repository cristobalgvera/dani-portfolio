import { IHeaderLink } from '../../../types/header/IHeaderLink';
import { HeaderLink } from '../atoms/HeaderLink';

const headerLinks: IHeaderLink[] = [
  {
    href: '#Experiencia',
    title: 'Experiencia',
  },
  {
    href: '#Proyectos',
    title: 'Proyectos',
  },
  {
    href: '#Habilidades',
    title: 'Habilidades',
  },
  {
    href: '#Contacto',
    title: 'Contacto',
  },
  {
    href: 'https://www.google.com',
    title: 'Currículum',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
];

export const HeaderLinkList = () => {
  return (
    <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
      {headerLinks.map((link) => (
        <li key={link.href}>
          <HeaderLink link={link} />
        </li>
      ))}
    </ul>
  );
};
