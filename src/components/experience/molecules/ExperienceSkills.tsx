import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { ExperienceTag } from '../atoms/ExperienceTag';

interface ExperienceSkillsProps extends Pick<IExperience, 'skills'> {}

export const ExperienceSkills: FC<ExperienceSkillsProps> = ({ skills }) => (
  <div className="flex flex-wrap px-2 gap-y-0 gap-x-2">
    {skills.map((skill, index) => (
      <ExperienceTag key={`${skill} - ${index}`} skill={skill} />
    ))}
  </div>
);
