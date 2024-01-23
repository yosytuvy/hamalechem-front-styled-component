import { render, screen } from '@testing-library/react';
import CardDetails from './CardDetails';

describe('CardDetails', () => {

  const content = {
    name: 'John',
    age: '20'    
  };

  test('renders content items', () => {
    render(<CardDetails content={content} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/age/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });

  test('renders no content when none provided', () => {
    render(<CardDetails />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const {asFragment} = render(<CardDetails content={content} />);  
    expect(asFragment()).toMatchSnapshot();
  });

});