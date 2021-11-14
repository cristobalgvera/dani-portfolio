import { FC } from 'react';
import { HEADERS_DATA } from '../../../data';
import { HeaderLinkList } from './molecules/HeaderLinkList';

export const Header: FC = () => {
  return (
    <nav className="space-x-10">
      <HeaderLinkList headers={HEADERS_DATA} />
    </nav>
  );
};
