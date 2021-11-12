import React, { FC } from 'react';

interface PageSectionProps {
  id: string;
  extraClasses?: React.HTMLAttributes<HTMLElement>['className'];
}

export const PageSection: FC<PageSectionProps> = ({
  id,
  extraClasses,
  children,
}) => {
  return (
    <section
      data-testid="section"
      id={id}
      className={`${extraClasses} my-16 px-5`}
    >
      {children}
    </section>
  );
};
