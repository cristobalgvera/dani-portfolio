import { PROJECTS_DATA } from '../../data';
import { SECTION } from '../../shared/constants';
import { SectionHeader } from '../common/atoms/SectionHeader';
import { PageSection } from '../common/molecules/PageSection';
import { ProjectImage } from './atoms/ProjectImage';
import { ProjectInformation } from './molecules/ProjectInformation';
import { ProjectLinks } from './molecules/ProjectLinks';
import { ProjectTags } from './molecules/ProjectTags';

const Projects = () => {
  return (
    <PageSection id={SECTION.PROJECTS}>
      <SectionHeader title={SECTION.PROJECTS} />
      <div className="flex flex-col gap-y-4 lg:gap-y-12">
        {PROJECTS_DATA.map(
          ({ title, description, link, image, tools }, index) => {
            return (
              <div key={index} className="grid grid-cols-2 gap-x-4 lg:gap-x-16">
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
          },
        )}
      </div>
    </PageSection>
  );
};

export default Projects;
