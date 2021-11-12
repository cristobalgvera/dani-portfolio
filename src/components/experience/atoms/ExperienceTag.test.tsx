import { render } from '@testing-library/react';
import { ExperienceTag } from './ExperienceTag';

describe('ExperienceTag', () => {
  it('should show skill text passed', () => {
    const { getByText } = render(<ExperienceTag skill="React" />);
    expect(getByText('React')).toBeInTheDocument();
  });
});
