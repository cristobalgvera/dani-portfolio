import { FC } from 'react';
import { IHeaderLink } from '../../../shared/types/header/IHeaderLink';

interface HeaderLinkProps {
  link: IHeaderLink;
}

export const HeaderLink: FC<HeaderLinkProps> = ({
  link: { href, title, rel, target },
}) => (
  <a
    role="link"
    href={href}
    target={target}
    rel={rel}
    className="py-0.5 px-2 focus:border-blue-600"
  >
    <span
      role="menuitem"
      className="font-normal text-xl transition duration-300 border-transparent border-b-2 hover:border-blue-600 "
    >
      {title}
    </span>
  </a>
);
