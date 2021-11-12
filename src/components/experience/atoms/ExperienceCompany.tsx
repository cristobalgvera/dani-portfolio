import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
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
        <a
          href={companyLink}
          className="ml-3 pt-1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiExternalLink className="text-xl text-blue-500" />
        </a>
      )}
    </div>
  );
};
