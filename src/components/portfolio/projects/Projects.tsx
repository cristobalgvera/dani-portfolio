import { PROJECTS_DATA } from '../../../data';
import { SECTION } from '../../../shared/constants';
import { SectionHeader } from '../../common/atoms/SectionHeader';
import { PageSection } from '../../common/molecules/PageSection';
import { ProjectCard } from './organisms/ProjectCard';

export const Projects = () => {
  return (
    <PageSection id={SECTION.PROJECTS}>
      <SectionHeader title={SECTION.PROJECTS} />
      <div className="flex flex-col gap-y-4 lg:gap-y-12">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </PageSection>
  );
};
