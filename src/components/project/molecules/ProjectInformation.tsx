import { FC } from 'react';
import { ProjectDescription } from '../atoms/ProjectDescription';
import { ProjectTitle } from '../atoms/ProjectTitle';

interface ProjectInformationProps {
  title: string;
  description: string;
}

export const ProjectInformation: FC<ProjectInformationProps> = ({
  title,
  description,
}) => (
  <div className="flex flex-col gap-y-1 lg:gap-y-2">
    <ProjectTitle title={title} />
    <ProjectDescription description={description} />
  </div>
);
