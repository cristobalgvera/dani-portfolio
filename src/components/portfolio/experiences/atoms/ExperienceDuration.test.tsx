import { render } from '@testing-library/react';
import { ExperienceDuration } from './ExperienceDuration';

const startDate = "Jul'21";
const endDate = "Jul'25";

describe('ExperienceDuration', () => {
  it('should show start date text', () => {
    const { getByText } = render(<ExperienceDuration startDate={startDate} />);
    expect(getByText(new RegExp(startDate))).toBeInTheDocument();
  });

  it('should show end date text', () => {
    const { getByText } = render(
      <ExperienceDuration startDate={startDate} endDate={endDate} />,
    );
    expect(getByText(new RegExp(endDate))).toBeInTheDocument();
  });

  it('should show start and end date text properly', () => {
    const { getByText } = render(
      <ExperienceDuration startDate={startDate} endDate={endDate} />,
    );

    expect(
      getByText(new RegExp(`${startDate} - ${endDate}`)),
    ).toBeInTheDocument();
  });

  it('should show end date as "Actualidad" when no end date is passed', () => {
    const { getByText } = render(<ExperienceDuration startDate={startDate} />);
    expect(getByText(new RegExp('Actualidad'))).toBeInTheDocument();
  });
});
