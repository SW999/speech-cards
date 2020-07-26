import * as React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

jest.mock(
  '../../../package.json',
  () => ({
    version: '1.0.0',
  }),
  { virtual: true }
);

describe('Footer component', () => {
  it('Footer should take a snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot('Footer');
  });
});
