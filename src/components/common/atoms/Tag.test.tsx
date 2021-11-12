import { render } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('should show tag provided', () => {
    const { getByText } = render(<Tag tag="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });
});
