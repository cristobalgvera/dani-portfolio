import { FC } from 'react';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';
import Experiences from '../src/components/experience/Experience';
import Projects from '../src/components/project/Projects';

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
