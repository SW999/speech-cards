import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  it('Loader should take a snapshot with spinner', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot('Loader with spinner');
  });

  it('Loader should take a snapshot with text', () => {
    const { asFragment } = render(<Loader onlyText />);

    expect(asFragment()).toMatchSnapshot('Loader with text');
  });
});
