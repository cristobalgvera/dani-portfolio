import { IHeaderLink } from '../../../types/header/IHeaderLink';

interface HeaderLinkProps {
  link: IHeaderLink;
}

export const HeaderLink = ({
  link: { href, title, rel, target },
}: HeaderLinkProps) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className="py-0.5 px-2 focus:border-blue-600"
  >
    <span className="font-bold text-xl transition duration-300 border-transparent border-b-2 hover:border-blue-600 ">
      {title}
    </span>
  </a>
);
