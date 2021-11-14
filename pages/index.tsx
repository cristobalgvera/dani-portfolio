import { FC } from 'react';
import Head from 'next/head';
import {
  Experiences,
  Header,
  Hero,
  Projects,
} from '../src/components/portfolio';

const App: FC = () => {
  return (
    <>
      <Head>
        <title>Daniela Corcuera</title>
        <meta name="description" content="Portafolio de Daniela Corcuera" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default App;
