import * as React from 'react';
import { render } from '@testing-library/react';
import Homepage from '../';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Homepage', () => {
  it('should render the homepage', () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
