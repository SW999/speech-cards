import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Card from './Card';
const SPEECH_TITLE = 'Test';
const TOUCH_HINT = 'Please use swipe to turn cards!';
const HINT = 'Please use left/right arrows to turn cards!';
const mockStartProps = {
  name: SPEECH_TITLE,
  step: 1,
  speech: [{ title: 'Start', content: ['Content item'] }],
};

jest.mock('../../../scss/themes/default-theme.scss', () => '', {
  virtual: true,
});

const isMobileDeviceMock = jest.fn();

jest.mock('../../../utils/', () => ({
  isMobileDevice: () => isMobileDeviceMock(),
}));

describe('<Card />', () => {
  it('Card renders with speech title and hint for non touch devices', () => {
    isMobileDeviceMock.mockReturnValue(false);
    render(<Card {...mockStartProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent(SPEECH_TITLE);
    expect(screen.getByTestId('card-hint')).toHaveTextContent(HINT);
  });

  it('Card renders with hint for touch devices', () => {
    isMobileDeviceMock.mockReturnValue(true);
    render(<Card {...mockStartProps} />);

    expect(screen.getByTestId('card-hint')).toHaveTextContent(TOUCH_HINT);
  });

  it('Card renders first slide', async () => {
    isMobileDeviceMock.mockReturnValue(false);
    const { container } = render(<Card {...mockStartProps} />);

    fireEvent.keyDown(document.body, {
      key: 'ArrowRight',
      code: 'ArrowRight',
    });

    await waitFor(() => {
      expect(screen.queryByTestId('card-hint')).not.toBeInTheDocument();
    });
    expect(container.querySelector('h2')).toHaveTextContent(
      mockStartProps['speech'][mockStartProps.step - 1].title
    );
  });

  it('Card not slides to the left after on title slide', async () => {
    render(<Card {...mockStartProps} />);

    fireEvent.keyDown(document.body, {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
    });

    await waitFor(() => {
      expect(screen.getByTestId('card-hint')).toBeInTheDocument();
    });
  });
});
