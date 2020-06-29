import * as React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { LoadSpeechBtn } from './LoadSpeechBtn';
import demo from '../../how_to_write_efficient_emails.json';

describe('<LoadSpeechBtn />', () => {
  test('LoadSpeechBtn renders with default props', () => {
    render(<LoadSpeechBtn onLoadSpeech={() => null} />);

    expect(screen.getByLabelText('Choose a JSON file')).toBeInTheDocument();
  });

  test('LoadSpeechBtn loads correct speecch file', async () => {
    const onLoadSpeech = jest.fn();
    const file = new File([JSON.stringify(demo)], 'test.json', {
      type: 'text/json',
    });
    render(<LoadSpeechBtn onLoadSpeech={onLoadSpeech} />);

    fireEvent.change(screen.getByLabelText('Choose a JSON file'), {
      target: { files: [file] },
    });

    await waitFor(() => {
      expect(onLoadSpeech).toHaveBeenCalledTimes(1);
    });
  });

  test('LoadSpeechBtn shows alert for incorrect speech file', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noop = () => {};
    Object.defineProperty(window, 'alert', { value: noop, writable: true });
    const onLoadSpeech = jest.fn();
    const wrongSpeech = { test: 'test' };
    const file = new File([JSON.stringify(wrongSpeech)], 'test.json', {
      type: 'text/json',
    });
    render(<LoadSpeechBtn onLoadSpeech={onLoadSpeech} />);

    fireEvent.change(screen.getByLabelText('Choose a JSON file'), {
      target: { files: [file] },
    });

    await waitFor(() => {
      expect(onLoadSpeech).toHaveBeenCalledTimes(0);
    });
  });
});
