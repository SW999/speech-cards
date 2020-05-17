import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
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
    const { queryByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const toggleMenu = queryByRole('button');
    expect(toggleMenu).toBeInTheDocument();
  });

  test('Header toggles menu on click by button', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.queryByRole('button'));
    await waitFor(() => {
      expect(screen.queryByRole('heading')).toHaveAttribute(
        'class',
        'page-header show-menu'
      );
    });

    fireEvent.click(screen.queryByRole('button'));
    await waitFor(() => {
      expect(screen.queryByRole('heading')).toHaveAttribute(
        'class',
        'page-header'
      );
    });
  });

  test('Header renders without show/hide menu button for not touch device', () => {
    const { queryByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const toggleMenu = queryByRole('button');
    expect(toggleMenu).not.toBeInTheDocument();
  });
});
