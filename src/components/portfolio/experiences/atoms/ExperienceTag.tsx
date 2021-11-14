import { FC } from 'react';
import { IExperience } from '../../../../shared/types/experience/IExperience';
import { Unpacked } from '../../../../shared/types/utils/Unpacked';
import { Tag } from '../../../common/atoms/Tag';

interface ExperienceTagProps {
  skill: Unpacked<IExperience['skills']>;
}

export const ExperienceTag: FC<ExperienceTagProps> = ({ skill }) => (
  <Tag tag={skill} />
);
