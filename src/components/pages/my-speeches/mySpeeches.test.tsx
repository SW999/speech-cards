import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MySpeeches } from './MySpeeches';

describe('MySpeeches', () => {
  test('MySpeeches', () => {
    render(<MySpeeches />);
    expect(screen.getByLabelText('Choose a JSON file')).toBeInTheDocument();
  });
});
