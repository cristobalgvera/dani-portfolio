import { render } from '@testing-library/react';
import { ExperienceDetail } from './ExperienceDetail';

describe('ExperienceDetail', () => {
  it('should display detail text provided', () => {
    const { getByText } = render(<ExperienceDetail detail="detail" />);
    expect(getByText('detail')).toBeTruthy();
  });
});
