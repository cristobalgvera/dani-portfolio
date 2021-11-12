import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { ExternalLinkIcon } from '../../common/atoms/ExternalLinkIcon';

interface ExperienceCompanyProps
  extends Pick<IExperience, 'companyName' | 'companyLink'> {}

export const ExperienceCompany: FC<ExperienceCompanyProps> = ({
  companyName,
  companyLink,
}) => (
  <div className="pb-0.5 flex">
    <span data-testid="company-name" className="uppercase font-bold text-2xl">
      {companyName}
    </span>
    {companyLink && <ExternalLinkIcon href={companyLink} />}
  </div>
);
