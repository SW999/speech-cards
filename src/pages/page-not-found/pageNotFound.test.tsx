import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('PageNotFound renders correctly', () => {
    const { asFragment } = render(<PageNotFound />);

    expect(asFragment()).toMatchSnapshot('PageNotFound');
  });
});
