import { render } from '@testing-library/react';
import { ExperienceDescription } from './ExperienceDescription';

describe('ExperienceDescription', () => {
  it('should render details passed', () => {
    const { getByText, getAllByTestId } = render(
      <ExperienceDescription
        description={['description1', 'description2', 'description3']}
      />,
    );

    expect(getByText('description1')).toBeInTheDocument();
    expect(getByText('description2')).toBeInTheDocument();
    expect(getByText('description3')).toBeInTheDocument();
    expect(getAllByTestId('experience-detail')).toHaveLength(3);
  });

  it('should render nothing if no details passed', () => {
    const { queryAllByTestId } = render(
      <ExperienceDescription description={[]} />,
    );

    expect(queryAllByTestId('experience-detail')).toHaveLength(0);
  });
});
