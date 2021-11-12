import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { Unpacked } from '../../../shared/types/utils/Unpacked';

interface ExperienceTagProps {
  skill: Unpacked<IExperience['skills']>;
}

export const ExperienceTag: FC<ExperienceTagProps> = ({ skill }) => (
  <span
    data-testid="experience-tag"
    className="px-2 py-1 mt-3 ml-1 rounded-lg border border-gray-500 text-sm"
  >
    {skill}
  </span>
);
