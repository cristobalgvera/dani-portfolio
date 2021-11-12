import { FC } from 'react';
import { experiencesData } from '../../data/experiencesData';
import { SECTION } from '../../shared/constants';
import { SectionHeader } from '../common/atoms/SectionHeader';
import { PageSection } from '../common/molecules/PageSection';
import { ExperienceCard } from './organisms/ExperienceCard';

const Experience: FC = () => {
  return (
    <PageSection id={SECTION.EXPERIENCES}>
      <SectionHeader title={SECTION.EXPERIENCES} />
      <div className="h-full box-border">
        <section className="w-11/12 mx-auto px-2 rounded-sm after:table after:clear-both">
          <div className="relative py-8 my-8 before:absolute before:left-6 before:top-0 before:h-full before:w-1 before:bg-purple-400 md:my-12 md:before:left-1/2 md:before:-ml-1">
            {experiencesData.map((experience, index) => (
              <div
                key={`${experience.companyName}-${index}`}
                className="relative my-16 pl-8 after:table after:clear-both first:mt-0 last:mb-0 md:my-8 md:pl-0"
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageSection>
  );
};

export default Experience;
