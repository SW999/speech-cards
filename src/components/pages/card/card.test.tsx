import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Card } from './Card';
const SPEECH_TITLE = 'Test';
const TOUCH_HINT = 'Please use swipe to turn cards!';
const HINT = 'Please use left/right arrows to turn cards!';
const mockStartProps = {
  name: SPEECH_TITLE,
  step: 1,
  speech: [{ title: 'Start', content: ['Content item'] }],
};

jest.mock('../../../utils/', () => ({
  isMobileDevice: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('<Card />', () => {
  test('Card renders with speech title and hint for non touch devices', () => {
    render(<Card {...mockStartProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent(SPEECH_TITLE);
    expect(screen.getByTestId('card-hint')).toHaveTextContent(HINT);
  });

  test('Card renders with hint for touch devices', () => {
    render(<Card {...mockStartProps} />);

    expect(screen.getByTestId('card-hint')).toHaveTextContent(TOUCH_HINT);
  });

  test('Card renders first slide', async () => {
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

  test('Card not slides to the left after on title slide', async () => {
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
