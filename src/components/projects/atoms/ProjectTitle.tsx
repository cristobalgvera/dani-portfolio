import { FC } from 'react';

interface ProjectTitleProps {
  title: string;
}

export const ProjectTitle: FC<ProjectTitleProps> = ({ title }) => {
  return <p className="uppercase font-bold text-2xl">{title}</p>;
};
