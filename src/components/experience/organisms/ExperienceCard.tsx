import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { ExperienceCompany } from '../atoms/ExperienceCompany';
import { ExperienceDuration } from '../atoms/ExperienceDuration';
import { ExperienceRole } from '../atoms/ExperienceRole';
import { ExperienceDescription } from '../molecules/ExperienceDescription';
import { ExperienceSkills } from '../molecules/ExperienceSkills';

interface ExperienceCardProps {
  experience: IExperience;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  experience: {
    companyName,
    role,
    startDate,
    endDate,
    description,
    skills,
    companyLink,
  },
}) => {
  return (
    <div className="flex flex-wrap flex-col gap-y-2 ml-16 mr-8 bg-gray-700 rounded-md py-4 px-8 text-left top-4 right-full before:absolute before:h-0 before:w-0 before:border-b-8 before:border-gray-700 after:table after:clear-both md:ml-0 md:w-2/5 md:mx-0.5 md:before:top-6 md:before:left-full md:before:border-gray-700">
      <ExperienceCompany companyName={companyName} companyLink={companyLink} />
      <ExperienceRole role={role} />
      <ExperienceDuration startDate={startDate} endDate={endDate} />
      <ExperienceDescription description={description} />
      <ExperienceSkills skills={skills} />
    </div>
  );
};
