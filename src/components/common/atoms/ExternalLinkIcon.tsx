import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface ExternalLinkProps {
  href: string;
  Icon?: JSX.Element;
}

export const ExternalLinkIcon: FC<ExternalLinkProps> = ({ href, Icon }) => (
  <a
    role="link"
    href={href}
    className="ml-3 pt-1"
    target="_blank"
    rel="noreferrer noopener"
  >
    {Icon ?? <FiExternalLink className="text-xl text-blue-500" />}
  </a>
);
