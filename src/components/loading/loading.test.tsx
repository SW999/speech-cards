import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('Loading should take a snapshot', () => {
    const { asFragment } = render(<Loading />);

    expect(asFragment()).toMatchSnapshot('Loading');
  });
});
