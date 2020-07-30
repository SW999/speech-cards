import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateNew from './CreateNew';

const mockLocationProp = {
  pathname: 'new',
  search: '',
  hash: '',
  state: null,
};

test('CreateNew renders without a data', () => {
  render(<CreateNew location={mockLocationProp} />);
  expect(screen.getByText('Create new')).toBeInTheDocument();
});

test('CreateNew opens existed speech for edit', () => {
  render(
    <CreateNew
      location={{
        ...mockLocationProp,
        state: {
          data: {
            name: 'test1',
            step: 1,
            speech: [{ title: 'test', content: ['test'] }],
          },
        },
      }}
    />
  );
  expect(screen.getByText('Edit speech')).toBeInTheDocument();
});
