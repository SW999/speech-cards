import * as React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  test('Footer should take a snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot('Footer');
  });
});
