import { render } from '@testing-library/react';
import { ProjectDescription } from './ProjectDescription';

describe('ProjectDescription', () => {
  it('should show description provided', () => {
    const { getByText } = render(
      <ProjectDescription description="Description" />,
    );
    expect(getByText('Description')).toBeInTheDocument();
  });
});
