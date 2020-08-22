import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Theme from './Theme';
import { STORAGE_THEME_PREFIX } from '../../constants';

const mockWindowProperty = (property, value) => {
  const { [property]: originalProperty } = window;
  delete window[property];
  beforeAll(() => {
    Object.defineProperty(window, property, {
      value,
      configurable: true,
      writable: true,
    });
  });
  afterAll(() => {
    window[property] = originalProperty;
  });
};

describe('Theme component', () => {
  mockWindowProperty('localStorage', {
    setItem: jest.fn(),
    getItem: jest.fn(),
  });

  it('Theme renders correctly', () => {
    const { asFragment } = render(<Theme />);

    expect(asFragment()).toMatchSnapshot('Theme');
  });

  it('Theme not changes value on click to active', () => {
    const wrapper = render(<Theme />);
    fireEvent.click(wrapper.container.querySelectorAll('.theme-col')[0]);

    expect(window.localStorage.setItem).not.toHaveBeenCalled();
  });

  it('Theme changes active value on click', () => {
    const wrapper = render(<Theme />);
    fireEvent.click(wrapper.container.querySelectorAll('.theme-col')[1]);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      STORAGE_THEME_PREFIX,
      'dark'
    );
  });
});
