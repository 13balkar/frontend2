import * as React from 'react';
import { render } from '@testing-library/react';
import Collection from '../';
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Collection', () => {
  it('should render the collection', () => {
    const { asFragment } = render(<Collection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
