import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/header/Header'));
const Hero = lazy(() => import('./components/hero/Hero'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container my-10 mx-auto max-w-screen-lg text-gray-100">
        <Header />
        <main>
          <Hero />
          <div>Experience</div>
          <div>Projects</div>
          <div>Skills</div>
          <div>Contact</div>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
