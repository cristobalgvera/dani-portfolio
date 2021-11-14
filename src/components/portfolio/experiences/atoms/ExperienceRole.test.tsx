import { render } from '@testing-library/react';
import { ExperienceRole } from './ExperienceRole';

describe('ExperienceRole', () => {
  it('should show role text passed', () => {
    const { getByText } = render(<ExperienceRole role="role" />);
    expect(getByText('role')).toBeInTheDocument();
  });
});
