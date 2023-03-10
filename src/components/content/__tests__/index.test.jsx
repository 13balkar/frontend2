import * as React from 'react';
import { render } from '@testing-library/react';
import Content from '../';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Content', () => {
  it('should render the content', () => {
    const { asFragment } = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });
});
