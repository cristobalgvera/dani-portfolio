import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface ExternalLinkProps {
  href: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href }) => (
  <a
    role="link"
    href={href}
    className="ml-3 pt-1"
    target="_blank"
    rel="noreferrer noopener"
  >
    <FiExternalLink className="text-xl text-blue-500" />
  </a>
);
