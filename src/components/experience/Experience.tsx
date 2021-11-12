import { FC } from 'react';
import { experiencesData } from '../../data/experiencesData';
import { SECTION } from '../../shared/constants';
import { SectionHeader } from '../common/atoms/SectionHeader';
import { PageSection } from '../common/molecules/PageSection';
import { ExperienceTimeLine } from './atoms/ExperienceTimeLine';
import { ExperienceCard } from './organisms/ExperienceCard';

const Experience: FC = () => {
  return (
    <PageSection id={SECTION.EXPERIENCES}>
      <SectionHeader title={SECTION.EXPERIENCES} />
      <div className="h-full box-border">
        <section className="w-11/12 mx-auto px-2 rounded-sm after:table after:clear-both">
          <ExperienceTimeLine>
            {experiencesData.map((experience, index) => (
              <ExperienceCard
                key={`${experience.companyName}-${index}`}
                experience={experience}
              />
            ))}
          </ExperienceTimeLine>
        </section>
      </div>
    </PageSection>
  );
};

export default Experience;
