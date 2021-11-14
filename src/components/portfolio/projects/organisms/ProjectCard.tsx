import { FC } from 'react';
import { IProject } from '../../../../shared/types/project/IProject';
import { ProjectImage } from '../atoms/ProjectImage';
import { ProjectInformation } from '../molecules/ProjectInformation';
import { ProjectLinks } from '../molecules/ProjectLinks';
import { ProjectTags } from '../molecules/ProjectTags';

interface ProjectLayoutProps {
  project: IProject;
}

export const ProjectCard: FC<ProjectLayoutProps> = ({
  project: { title, description, tools, image, link },
}) => (
  <div className="grid grid-cols-2 gap-x-4 lg:gap-x-16">
    <div className="flex flex-col gap-y-2 lg:gap-y-4">
      <ProjectInformation title={title} description={description} />
      <ProjectTags tags={tools} />
      <ProjectLinks links={[{ href: link }]} />
    </div>
    <div className="self-center">
      <ProjectImage src={image} alt={title} />
    </div>
  </div>
);
