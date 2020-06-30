import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentItem } from './ContentItem';

const mockedContentItemProps = {
  error: {},
  register: jest.fn(),
  onAdd: jest.fn(),
  onRemove: jest.fn(),
  setValue: jest.fn(),
  step: 1,
  handleChangeContent: jest.fn(),
};

test('ContentItem renders for first step', () => {
  render(
    <ContentItem
      {...mockedContentItemProps}
      isLastItem={false}
      itemCount={0}
      itemText={''}
    />
  );

  expect(
    screen.queryByRole('button', { name: 'Remove item' })
  ).not.toBeInTheDocument();
});

test('ContentItem renders for second step', () => {
  render(
    <ContentItem
      {...mockedContentItemProps}
      isLastItem={false}
      itemCount={2}
      itemText={''}
    />
  );

  expect(
    screen.getByRole('button', { name: 'Remove item' })
  ).toBeInTheDocument();
});
