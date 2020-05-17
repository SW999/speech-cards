import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
jest.mock('../../utils/', () => ({
  checkTouch: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('<Header />', () => {
  test('Header renders with show/hide menu button for touch device', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Header toggles menu on click by button', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.queryByRole('button'));

    expect(await screen.findByRole('heading')).toHaveAttribute(
      'class',
      'page-header show-menu'
    );

    fireEvent.click(screen.queryByRole('button'));

    expect(await screen.findByRole('heading')).toHaveAttribute(
      'class',
      'page-header'
    );
  });

  test('Header renders without show/hide menu button for not touch device', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
