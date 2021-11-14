import { FC } from 'react';
import { IHeaderLink } from '../../../../../shared/types/header/IHeaderLink';
import { HeaderLink } from '../atoms/HeaderLink';

interface HeaderLinkListProps {
  headers: IHeaderLink[];
}

export const HeaderLinkList: FC<HeaderLinkListProps> = ({ headers }) => {
  return (
    <ul className="flex flex-col justify-center items-end lg:flex-row lg:justify-end lg:space-x-10 lg:text-xl ">
      {headers.map((link) => (
        <li key={link.href}>
          <HeaderLink link={link} />
        </li>
      ))}
    </ul>
  );
};
