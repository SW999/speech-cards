import React from 'react';
import { render } from '@testing-library/react';
import WithLoading from './WithLoading';

const TestComponent = () => <div>Test</div>;

describe('WithLoading component', () => {
  it('WithLoading renders correctly', () => {
    const { asFragment } = render(<WithLoading component={TestComponent} />);

    expect(asFragment()).toMatchSnapshot('WithLoading');
  });
});
