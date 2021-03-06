import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';

const isMobileDevice = jest.fn();
jest.mock('../../utils', () => ({
  isMobileDevice: () => isMobileDevice(),
}));

describe('<Header />', () => {
  it('Header renders with show/hide menu button for touch device', () => {
    isMobileDevice.mockReturnValue(true);
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Header toggles menu on click by button', async () => {
    isMobileDevice.mockReturnValue(true);
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    fireEvent.click(screen.queryByRole('button'));

    expect(await screen.findByRole('banner')).toHaveAttribute(
      'class',
      'page-header show-menu'
    );

    fireEvent.click(screen.queryByRole('button'));

    expect(await screen.findByRole('banner')).toHaveAttribute(
      'class',
      'page-header'
    );
  });

  it('Header renders without show/hide menu button for not touch device', () => {
    isMobileDevice.mockReturnValue(false);
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
