import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Theme from './Theme';
//
// const mockWindowProperty = (property, value) => {
//   const { [property]: originalProperty } = window;
//   delete window[property];
//   beforeAll(() => {
//     Object.defineProperty(window, property, {
//       value,
//       configurable: true,
//       writable: true,
//     });
//   });
//   afterAll(() => {
//     window[property] = originalProperty;
//   });
// };

describe('Theme component', () => {
  // mockWindowProperty('localStorage', {
  //   setItem: jest.fn(),
  //   getItem: jest.fn(),
  // });

  it('Theme renders correctly', () => {
    const { asFragment } = render(<Theme />);

    expect(asFragment()).toMatchSnapshot('Theme');
  });

  it('Theme not changes value on click to active', () => {
    render(<Theme />);
    fireEvent.click(screen.getByTestId('default'));

    expect(
      screen.getByTestId('default').classList.contains('theme-col_active')
    ).toBeTruthy();
  });

  it('Theme changes value on click to not active value', async () => {
    render(<Theme />);

    expect(
      screen.getByTestId('dark').classList.contains('theme-col_active')
    ).toBeFalsy();

    fireEvent.click(screen.getByTestId('dark'));

    await waitFor(() => {
      expect(
        screen.getByTestId('dark').classList.contains('theme-col_active')
      ).toBeTruthy();
    });
  });
});
