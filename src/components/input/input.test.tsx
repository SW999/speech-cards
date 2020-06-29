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
    const { container } = render(<Input {...mockedInputProps} />);
    expect(
      screen.getByLabelText(`${mockedInputProps.label}:`)
    ).toBeInTheDocument();

    expect(container.querySelector('.error-message')).not.toBeInTheDocument();
  });

  test('Input renders with an error message', () => {
    const { container } = render(
      <Input {...mockedInputProps} error={{ test: { type: 'required' } }} />
    );

    expect(container.querySelector('.error-message')).toBeInTheDocument();
    expect(screen.getByLabelText(`${mockedInputProps.label}:`)).toHaveClass(
      'invalid-input'
    );
  });

  test('Input renders an error outline without a message for an error without type', () => {
    const { container } = render(
      <Input {...mockedInputProps} error={{ test: {} }} />
    );

    expect(container.querySelector('.error-message')).not.toBeInTheDocument();
    expect(screen.getByLabelText(`${mockedInputProps.label}:`)).toHaveClass(
      'invalid-input'
    );
  });
});
