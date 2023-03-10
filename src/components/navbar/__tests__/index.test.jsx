import * as React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../';
import makeRequest from '../../../utils/makeRequest';
jest.mock('../../../utils/makeRequest');
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Navbar', () => {
  it('should render the navbar', () => {
    const setView = jest.fn();
    const { asFragment } = render(<Navbar view={true} setView={setView} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render the navbar with names', () => {
    const setView = jest.fn();
    makeRequest.mockResolvedValueOnce(['name1', 'name2']);
    const { asFragment } = render(<Navbar view={true} setView={setView} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
