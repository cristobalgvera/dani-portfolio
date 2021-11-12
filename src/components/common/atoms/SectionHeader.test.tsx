import { render } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('should render title properly', () => {
    const { getByText } = render(<SectionHeader title="Test" />);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
