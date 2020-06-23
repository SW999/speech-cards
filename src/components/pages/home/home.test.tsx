import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { HashRouter } from 'react-router-dom';

const isMobileDevice = jest.fn();

jest.mock('../../../utils', () => ({
  isMobileDevice: (): boolean => isMobileDevice(),
}));

describe('Home component', () => {
  test('Home renders with QR code for desktop', () => {
    isMobileDevice.mockReturnValue(false);
    const { asFragment } = render(
      <HashRouter>
        <Home />
      </HashRouter>
    );

    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('Desktop');
  });

  test('Home renders without QR code for mobile', () => {
    isMobileDevice.mockReturnValue(true);
    const { asFragment } = render(
      <HashRouter>
        <Home />
      </HashRouter>
    );

    expect(screen.queryByRole('figure')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('Mobile');
  });
});
