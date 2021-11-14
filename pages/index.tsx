import { FC } from 'react';
import { Experiences, Hero, Projects } from '../src/components/portfolio';
import { Layout } from '../src/components/common/layout/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <main className="container">
        <Hero />
        <Experiences />
        <Projects />
        <div>Skills</div>
        <div>Contact</div>
      </main>
    </Layout>
  );
};

export default Home;
