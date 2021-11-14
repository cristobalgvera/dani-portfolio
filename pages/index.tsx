import { FC } from 'react';
import {
  Experiences,
  Header,
  Hero,
  Projects,
} from '../src/components/portfolio';
import { Layout } from '../src/components/common/molecules/Layout';

const App: FC = () => {
  return (
    <Layout>
      <div className="container my-10 mx-auto max-w-screen-lg text-gray-100">
        <Header />
        <main>
          <Hero />
          <Experiences />
          <Projects />
          <div>Skills</div>
          <div>Contact</div>
        </main>
      </div>
    </Layout>
  );
};

export default App;
