import { render } from '@testing-library/react';
import { PageSection } from './PageSection';

const id = 'test';
const extraClasses = 'extra-class';

describe('PageSection', () => {
  it('should show children', () => {
    const { getByText } = render(
      <PageSection id={id}>
        <p>test</p>
      </PageSection>,
    );
    expect(getByText('test')).toBeTruthy();
  });

  it('should have a section with provided id', () => {
    const { getByTestId } = render(
      <PageSection id={id}>
        <p>test</p>
      </PageSection>,
    );
    const section = getByTestId('section');
    expect(section.id).toBe(id);
  });

  it('should use extra classes provided to section', () => {
    const { getByTestId } = render(
      <PageSection id={id} extraClasses={extraClasses}>
        <p>test</p>
      </PageSection>,
    );
    const section = getByTestId('section');
    expect(section.classList.contains(extraClasses)).toBeTruthy();
  });
});
