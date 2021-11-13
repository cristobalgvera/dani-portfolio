import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { IExternalLink } from '../../../shared/types/common/IExternalLink';

interface ExternalLinkProps {
  link: IExternalLink;
}

export const ExternalLinkIcon: FC<ExternalLinkProps> = ({
  link: { href, Icon },
}) => (
  <a
    role="link"
    href={href}
    className="pt-1"
    target="_blank"
    rel="noreferrer noopener"
  >
    {Icon ?? <FiExternalLink className="text-xl text-blue-500" />}
  </a>
);
