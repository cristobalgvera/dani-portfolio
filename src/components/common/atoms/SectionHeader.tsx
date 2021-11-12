import { FC } from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <header className="text-2xl font-bold pt-10">
      <h2>{title}</h2>
    </header>
  );
};
