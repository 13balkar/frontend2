import * as React from 'react';
import { render } from '@testing-library/react';
import Cms from '../';
import Navbar from '../../../components/navbar';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Cms', () => {
  it('should render the cms', () => {
    const { asFragment } = render(<Cms />);
    expect(asFragment()).toMatchSnapshot();
  });
});
