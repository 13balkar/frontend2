import * as React from 'react';
import { render } from '@testing-library/react';
import LoginBox from '../';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('LoginBox', () => {
  it('should render the loginBox', () => {
    const { asFragment } = render(<LoginBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
