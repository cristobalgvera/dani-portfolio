import { render } from '@testing-library/react';
import { ProjectImage } from './ProjectImage';

const imageUrl = 'https://via.placeholder.com/300x200';
const imageAlt = 'Project image';

describe('ProjectImage', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ProjectImage src={imageUrl} alt={imageAlt} />,
    );
    expect(container).toBeInTheDocument();
  });
});
