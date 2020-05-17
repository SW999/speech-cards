import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
const SPEECH_TITLE = 'Test';
const TOUCH_HINT = 'Please use swipe to turn cards!';
const HINT = 'Please use left/right arrows to turn cards!';
const mockStartProps = {
  name: SPEECH_TITLE,
  step: -1,
  speech: [{ title: 'start', content: ['test'] }],
};

jest.mock('../../../utils/', () => ({
  checkTouch: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true),
  // .mockReturnValueOnce(false),
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
});
