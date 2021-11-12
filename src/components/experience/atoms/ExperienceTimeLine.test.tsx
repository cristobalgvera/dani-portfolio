import { render } from '@testing-library/react';
import { ExperienceTimeLine } from './ExperienceTimeLine';

describe('ExperienceTimeLine', () => {
  it('should display children prop', () => {
    const { getByText } = render(
      <ExperienceTimeLine>
        <p>test</p>
      </ExperienceTimeLine>,
    );
    expect(getByText('test')).toBeInTheDocument();
  });
});
