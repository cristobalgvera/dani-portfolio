import { render } from '@testing-library/react';
import { ExperienceSkills } from './ExperienceSkills';

describe('ExperienceSkills', () => {
  it('should render three experience tags', () => {
    const { getByText, getAllByTestId } = render(
      <ExperienceSkills skills={['typescript', 'javascript', 'react']} />,
    );

    expect(getByText('typescript')).toBeInTheDocument();
    expect(getByText('javascript')).toBeInTheDocument();
    expect(getByText('react')).toBeInTheDocument();

    expect(getAllByTestId('tag')).toHaveLength(3);
  });

  it('should render no experience tags', () => {
    const { queryAllByTestId } = render(<ExperienceSkills skills={[]} />);
    expect(queryAllByTestId('tag')).toHaveLength(0);
  });
});
