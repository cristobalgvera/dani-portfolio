import { FC } from 'react';
import { headerLinks } from '../../../data/headerData';
import { HeaderLink } from '../atoms/HeaderLink';

export const HeaderLinkList: FC = () => {
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
