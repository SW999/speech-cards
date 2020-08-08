import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
const mockedInputProps = {
  error: {},
  label: 'label',
  name: 'test',
  onChange: jest.fn(),
  placeholder: 'enter data',
  register: jest.fn(),
};

describe('Input component', () => {
  it('Input renders correctly', () => {
    render(<Input {...mockedInputProps} />);
    expect(
      screen.getByLabelText(`${mockedInputProps.label}:`)
    ).toBeInTheDocument();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('Input renders with an error message', () => {
    render(
      <Input {...mockedInputProps} error={{ test: { type: 'required' } }} />
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByLabelText(`${mockedInputProps.label}:`)).toHaveClass(
      'invalid-input'
    );
  });

  it('Input renders an error outline without a message for an error without type', () => {
    render(<Input {...mockedInputProps} error={{ test: {} }} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByLabelText(`${mockedInputProps.label}:`)).toHaveClass(
      'invalid-input'
    );
  });
});
