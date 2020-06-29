import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MySpeeches } from './MySpeeches';

const getSpeechNamesFromStorage = jest.fn();
const doSpeechNameReadable = jest.fn();
const readFromStorage = jest.fn();
const validateJSON = jest.fn();

jest.mock('../../../utils', () => ({
  getSpeechNamesFromStorage: () => getSpeechNamesFromStorage(),
  doSpeechNameReadable: () => doSpeechNameReadable(),
  readFromStorage: () => readFromStorage(),
  validateJSON: () => validateJSON(),
}));

describe('MySpeeches', () => {
  test('MySpeeches renders with button', () => {
    getSpeechNamesFromStorage.mockReturnValue([]);
    render(<MySpeeches />);
    expect(screen.getByLabelText('Choose a JSON file')).toBeInTheDocument();
  });

  test('MySpeeches renders ...', async () => {
    getSpeechNamesFromStorage.mockReturnValue(['speech_test1']);
    doSpeechNameReadable.mockReturnValue(['test1']);
    validateJSON.mockReturnValue(true);
    readFromStorage.mockReturnValue({
      name: 'test',
      step: 1,
      speech: [{ title: 'test', content: ['test'] }],
    });

    const { debug } = render(<MySpeeches />);

    await waitFor(() => {
      debug();
      expect(screen.getByLabelText('Choose a JSON file')).toBeInTheDocument();
    });
  });
});
