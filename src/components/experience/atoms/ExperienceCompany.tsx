import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { ExternalLink } from '../../common/atoms/ExternalLink';

interface ExperienceCompanyProps
  extends Pick<IExperience, 'companyName' | 'companyLink'> {}

export const ExperienceCompany: FC<ExperienceCompanyProps> = ({
  companyName,
  companyLink,
}) => (
  <div className="pb-0.5 flex">
    <span className="uppercase font-bold text-2xl">{companyName}</span>
    {companyLink && <ExternalLink href={companyLink} />}
  </div>
);
