import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';

interface ExperienceCompanyProps
  extends Pick<IExperience, 'companyName' | 'companyLink'> {}

export const ExperienceCompany: FC<ExperienceCompanyProps> = ({
  companyName,
  companyLink,
}) => {
  return (
    <div className="pt-2 pb-0.5 flex">
      <span className="uppercase font-bold text-2xl">{companyName}</span>
      {companyLink && (
        <div className="inline-flex w-auto space-x-5 ml-2 mt-1">
          <a href={companyLink} target="_blank" rel="noreferrer noopener">
            <span>LINK</span>
          </a>
        </div>
      )}
    </div>
  );
};
