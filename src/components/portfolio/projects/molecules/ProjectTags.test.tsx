import { render } from '@testing-library/react';
import { ProjectTags } from './ProjectTags';

describe('ProjectTags', () => {
  it('should show all tags provided', () => {
    const tags = ['tag1', 'tag2', 'tag3'];
    const { getByText, queryAllByTestId } = render(<ProjectTags tags={tags} />);
    tags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument();
    });
    expect(queryAllByTestId('tag')).toHaveLength(tags.length);
  });

  it('shoul show no tags when no one is provided', () => {
    const { queryAllByTestId } = render(<ProjectTags tags={[]} />);
    expect(queryAllByTestId('tag')).toHaveLength(0);
  });
});
