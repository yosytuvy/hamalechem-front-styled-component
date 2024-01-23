import { render, screen } from '@testing-library/react';
import { Donation } from './DonationDetailsPage';

describe('Donation', () => {

  test('renders CardImage with correct props', () => {
    render(<Donation />);
    const image = screen.getByAltText('cotton blankets'); 
    expect(image).toHaveAttribute('src', '/Authenticity50_Cotton_Blankets.webp');
  });

  test('renders CardHeader with correct title', () => {
    render(<Donation />);
    const title = screen.getByRole('heading', { name: 'Blankets' });
    expect(title).toBeInTheDocument();
  });

  test('renders CardDetails with correct content', () => {
    render(<Donation />);
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/clothing/i)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Donation />);
    expect(asFragment()).toMatchSnapshot();
  });

});