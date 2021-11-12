import { FC } from 'react';
import { HeaderLinkList } from './molecules/HeaderLinkList';

const Header: FC = () => {
  return (
    <nav className="space-x-10">
      <HeaderLinkList />
    </nav>
  );
};

export default Header;
