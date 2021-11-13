import { render } from '@testing-library/react';
import { ProjectTitle } from './ProjectTitle';

describe('ProjectTitle', () => {
  it('should show text provided', () => {
    const text = 'Test';
    const { getByText } = render(<ProjectTitle title={text} />);
    expect(getByText(new RegExp(text))).toBeInTheDocument();
  });
});
