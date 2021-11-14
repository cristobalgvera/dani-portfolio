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
  <article className="grid py-2 justify-center md:justify-start gap-x-4 group md:grid-flow-col lg:gap-x-16">
    <picture className="md:group-even:order-last">
      <ProjectImage src={image} alt={title} />
    </picture>
    <div className="flex flex-col gap-y-2 lg:gap-y-4">
      <ProjectInformation title={title} description={description} />
      <ProjectTags tags={tools} />
      <ProjectLinks links={[{ href: link }]} />
    </div>
  </article>
);
