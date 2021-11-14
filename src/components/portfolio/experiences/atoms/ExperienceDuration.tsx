import { FC } from 'react';
import { IExperience } from '../../../../shared/types/experience/IExperience';

interface ExperienceDurationProps
  extends Pick<IExperience, 'endDate' | 'startDate'> {}

export const ExperienceDuration: FC<ExperienceDurationProps> = ({
  endDate,
  startDate,
}) => {
  return (
    <div className="mr-1 py-1 px-2 w-max bg-gray-800 text-gray-300 text-xs rounded-md">
      <span className="text-sm">
        {startDate} - {endDate ?? 'Actualidad'}
      </span>
    </div>
  );
};
