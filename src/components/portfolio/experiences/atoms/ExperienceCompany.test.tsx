import { render } from '@testing-library/react';
import { ExperienceCompany } from './ExperienceCompany';

const companyName = 'Company Name';
const companyLink = 'https://company.com';
const EXTERNAL_LINK = 'ExternaLink';

jest.mock('../../../common/atoms/ExternalLinkIcon.tsx', () => ({
  ExternalLinkIcon: () => <p>{EXTERNAL_LINK}</p>,
}));

describe('ExperienceCompany', () => {
  it('should have a text with provided company name', () => {
    const { getByTestId } = render(
      <ExperienceCompany companyName={companyName} />,
    );

    expect(getByTestId('company-name')).toHaveTextContent(companyName);
  });

  it('should have an external link rendered when company link is provided', () => {
    const { getByText } = render(
      <ExperienceCompany companyName={companyName} companyLink={companyLink} />,
    );

    expect(getByText(EXTERNAL_LINK)).toBeInTheDocument();
  });
});
