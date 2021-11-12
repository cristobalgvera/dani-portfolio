import { FC, lazy, Suspense } from 'react';
import { Spinner } from './components/common/atoms/Spinner';

const Header = lazy(() => import('./components/header/Header'));
const Hero = lazy(() => import('./components/hero/Hero'));
const Experiences = lazy(() => import('./components/experience/Experience'));

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner fullscreen />}>
      <div className="container my-10 mx-auto max-w-screen-lg text-gray-100">
        <Header />
        <main>
          <Hero />
          <Experiences />
          <div>Projects</div>
          <div>Skills</div>
          <div>Contact</div>
        </main>
      </div>
    </Suspense>
  );
};

export default App;
