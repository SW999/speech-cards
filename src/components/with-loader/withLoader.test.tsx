import React from 'react';
import { render } from '@testing-library/react';
import WithLoader from './WithLoader';

const TestComponent = ({ name }) => <div>Test {name}</div>;

describe('WithLoading component', () => {
  it('WithLoading renders correctly', () => {
    const { asFragment } = render(
      WithLoader({ component: TestComponent })({ name: 'Test' })
    );

    expect(asFragment()).toMatchSnapshot('WithLoading');
  });
});
