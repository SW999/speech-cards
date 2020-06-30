import * as React from 'react';
import { render } from '@testing-library/react';
import { NoMatch } from './NoMatch';

describe('NoMatch component', () => {
  it('NoMatch renders correctly', () => {
    const { asFragment } = render(<NoMatch />);

    expect(asFragment()).toMatchSnapshot('NoMatch');
  });
});
