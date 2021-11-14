import { FC } from 'react';
import { HERO_DATA } from '../../../data';
import { SECTION } from '../../../shared/constants';
import { PageSection } from '../../common/molecules/PageSection';
import { HeroAnimation } from './atoms/HeroAnimation';
import { HeroGreet } from './atoms/HeroGreet';

export const Hero: FC = () => {
  return (
    <PageSection
      id={SECTION.HERO}
      extraClasses="relative flex flex-col flex-wrap"
    >
      <HeroAnimation />
      <div className="absolute bottom-0">
        <HeroGreet name={HERO_DATA.NAME} description={HERO_DATA.DESCRIPTION} />
      </div>
    </PageSection>
  );
};
