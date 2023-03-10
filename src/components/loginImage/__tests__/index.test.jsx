import * as React from 'react';
import { render } from '@testing-library/react';
import LoginImage from '../';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('LoginImage', () => {
  it('should render the loginImage', () => {
    const { asFragment } = render(<LoginImage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
