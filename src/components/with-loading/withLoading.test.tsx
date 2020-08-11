import React from 'react';
import { render } from '@testing-library/react';
import WithLoading from './WithLoading';

const TestComponent = ({ name }) => <div>Test {name}</div>;

describe('WithLoading component', () => {
  it('WithLoading renders correctly', () => {
    const { asFragment } = render(
      WithLoading({ component: TestComponent })({ name: 'Test' })
    );

    expect(asFragment()).toMatchSnapshot('WithLoading');
  });
});
