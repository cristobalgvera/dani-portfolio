import { FC } from 'react';
import { IExperience } from '../../../shared/types/experience/IExperience';
import { Unpacked } from '../../../shared/types/utils/Unpacked';

interface ExperienceDescriptionProps {
  detail: Unpacked<IExperience['description']>;
}

export const ExperienceDetail: FC<ExperienceDescriptionProps> = ({
  detail,
}) => (
  <div data-testid="experience-detail" className="grid grid-cols-12 text-xl">
    <span className="col-span-1">-</span>
    <span className="col-span-11 py-1 first:pt-0 last:pb-0">{detail}</span>
  </div>
);
