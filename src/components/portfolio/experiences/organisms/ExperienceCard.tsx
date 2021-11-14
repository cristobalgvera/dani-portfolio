import { FC } from 'react';
import { IExperience } from '../../../../shared/types/experience/IExperience';
import { ExperienceCompany } from '../atoms/ExperienceCompany';
import { ExperienceDuration } from '../atoms/ExperienceDuration';
import { ExperienceRole } from '../atoms/ExperienceRole';
import { ExperienceTimeLineMark } from '../atoms/ExperienceTimeLineMark';
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
}) => (
  <div className="relative my-16 pl-8 after:table after:clear-both first:mt-0 last:mb-0 md:my-8 md:pl-0 group">
    <ExperienceTimeLineMark />
    <div className="flex flex-wrap flex-col gap-y-2 ml-16 mr-8 py-6 px-8 bg-gray-700 rounded-md text-left top-4 right-full md:ml-0 md:w-5/12 md:mx-0.5 md:group-even:float-right">
      <ExperienceCompany companyName={companyName} companyLink={companyLink} />
      <ExperienceRole role={role} />
      <ExperienceDuration startDate={startDate} endDate={endDate} />
      <ExperienceDescription description={description} />
      <ExperienceSkills skills={skills} />
    </div>
  </div>
);
