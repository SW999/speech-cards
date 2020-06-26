import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';
const mockedInputProps = {
  error: {},
  label: 'label',
  name: 'test',
  onChange: jest.fn(),
  placeholder: 'enter data',
  register: jest.fn(),
};

describe('Input component', () => {
  test('Input renders correctly', () => {
    render(<Input {...mockedInputProps} />);
    expect(
      screen.getByLabelText(`${mockedInputProps.label}:`)
    ).toBeInTheDocument();
  });
});
