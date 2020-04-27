import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  test('Header Component renders with className', async () => {
    const { findByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const wrap = await findByTestId('header');

    expect(wrap).toHaveClass('page-header');
  });
});
