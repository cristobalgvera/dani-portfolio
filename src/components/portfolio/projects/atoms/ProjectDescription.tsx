import { FC } from 'react';

interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription: FC<ProjectDescriptionProps> = ({
  description,
}) => <p className="text-sm lg:text-md">{description}</p>;
