import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/header/organisms/Header'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container my-10 mx-auto bg-gray-500 text-white">
        <Header />
        <main>
          <div>Hero</div>
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
