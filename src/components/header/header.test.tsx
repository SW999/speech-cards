import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  test('Header Component renders Navigation with aria label', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const aria = getByRole('navigation');
    expect(aria).toHaveAttribute('aria-label', 'Main navigation');
  });
});
