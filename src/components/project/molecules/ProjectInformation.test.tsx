import { render } from '@testing-library/react';
import { ProjectInformation } from './ProjectInformation';

describe('ProjectInformation', () => {
  it('should show title and description provided', () => {
    const { getByText } = render(
      <ProjectInformation title="title" description="description" />,
    );

    expect(getByText('title')).toBeInTheDocument();
    expect(getByText('description')).toBeInTheDocument();
  });
});
