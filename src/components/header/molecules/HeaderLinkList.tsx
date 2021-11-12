import { FC } from 'react';
import { IHeaderLink } from '../../../shared/types/header/IHeaderLink';
import { HeaderLink } from '../atoms/HeaderLink';

interface HeaderLinkListProps {
  headers: IHeaderLink[];
}

export const HeaderLinkList: FC<HeaderLinkListProps> = ({ headers }) => {
  return (
    <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
      {headers.map((link) => (
        <li key={link.href}>
          <HeaderLink link={link} />
        </li>
      ))}
    </ul>
  );
};
