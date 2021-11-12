import { FC } from 'react';

export const ExperienceTimeLine: FC = ({ children }) => (
  <div className="relative py-8 my-8 before:absolute before:left-6 before:top-0 before:h-full before:w-1 before:bg-purple-400 md:my-12 md:before:left-1/2 md:before:-ml-0.5">
    {children}
  </div>
);
