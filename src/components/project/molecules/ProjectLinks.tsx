import { FC } from 'react';
import { IExternalLink } from '../../../shared/types/common/IExternalLink';
import { ExternalLinkIcon } from '../../common/atoms/ExternalLinkIcon';

interface ProjectLinksProps {
  links: IExternalLink[];
}

export const ProjectLinks: FC<ProjectLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-x-2">
      {links.map((link) => (
        <ExternalLinkIcon key={link.href} link={link} />
      ))}
    </div>
  );
};
