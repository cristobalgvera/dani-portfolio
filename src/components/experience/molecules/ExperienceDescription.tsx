import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { ExperienceDetail } from '../atoms/ExperienceDetail';

interface ExperienceDescriptionProps extends Pick<IExperience, 'description'> {}

export const ExperienceDescription: FC<ExperienceDescriptionProps> = ({
  description,
}) => (
  <>
    {description.map((detail, index) => (
      <ExperienceDetail key={index} detail={detail} />
    ))}
  </>
);
