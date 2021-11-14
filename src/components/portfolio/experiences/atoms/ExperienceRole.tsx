import { FC } from 'react';
import { IExperience } from '../../../../shared/types/experience/IExperience';

interface ExperienceRoleProps extends Pick<IExperience, 'role'> {}

export const ExperienceRole: FC<ExperienceRoleProps> = ({ role }) => {
  return <span className="uppercase font-bold">{role}</span>;
};
