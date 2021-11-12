import { render } from '@testing-library/react';
import { ExperienceTimeLineMark } from './ExperienceTimeLineMark';

describe('ExperienceTimeLineMark', () => {
  it('should render without crash', () => {
    const { container } = render(<ExperienceTimeLineMark />);
    expect(container).toBeTruthy();
  });
});
