import { FC } from 'react';
import { HEADERS } from '../../data/headerData';
import { HeaderLinkList } from './molecules/HeaderLinkList';

const Header: FC = () => {
  return (
    <nav className="space-x-10">
      <HeaderLinkList headers={HEADERS} />
    </nav>
  );
};

export default Header;
