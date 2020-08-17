import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import MySpeeches from './MySpeeches';
import { STORAGE_SPEECH_PREFIX } from 'constants/';

const getSpeechNamesFromStorage = jest.fn();
const doSpeechNameReadable = jest.fn();
const readFromStorage = jest.fn();
const validateJSON = jest.fn();
const isMobileDevice = jest.fn();

jest.mock('../../../utils', () => ({
  getSpeechNamesFromStorage: () => getSpeechNamesFromStorage(),
  doSpeechNameReadable: () => doSpeechNameReadable(),
  readFromStorage: () => readFromStorage(),
  validateJSON: () => validateJSON(),
  isMobileDevice: () => isMobileDevice(),
}));

describe('MySpeeches', () => {
  it('MySpeeches renders with button', () => {
    getSpeechNamesFromStorage.mockReturnValue([]);
    render(<MySpeeches />);
    expect(screen.getByLabelText('Choose a JSON file')).toBeInTheDocument();
  });

  it('MySpeeches renders selected speech from storage', async () => {
    getSpeechNamesFromStorage.mockReturnValue([
      `${STORAGE_SPEECH_PREFIX}test1`,
    ]);
    doSpeechNameReadable.mockReturnValue(['test1']);
    validateJSON.mockReturnValue(true);
    isMobileDevice.mockReturnValue(false);
    readFromStorage.mockReturnValue({
      name: 'test1',
      step: 1,
      speech: [{ title: 'test', content: ['test'] }],
    });

    render(<MySpeeches />);
    fireEvent.click(screen.getByRole('button', { name: 'test1' }));

    await waitFor(() => {
      expect(
        screen.queryByLabelText('Choose a JSON file')
      ).not.toBeInTheDocument();
      expect(screen.getByTestId('card-hint')).toBeInTheDocument();
    });
  });

  it('MySpeeches opens selected speech for edit', async () => {
    getSpeechNamesFromStorage.mockReturnValue([
      `${STORAGE_SPEECH_PREFIX}test1`,
    ]);
    doSpeechNameReadable.mockReturnValue(['test1']);
    validateJSON.mockReturnValue(true);
    isMobileDevice.mockReturnValue(false);
    readFromStorage.mockReturnValue({
      name: 'test1',
      step: 1,
      speech: [{ title: 'test', content: ['test'] }],
    });

    render(
      <HashRouter>
        <MySpeeches />
      </HashRouter>
    );
    fireEvent.click(screen.getAllByRole('button')[1]);

    await waitFor(() => {
      expect(
        screen.queryByLabelText('Choose a JSON file')
      ).not.toBeInTheDocument();
    });
  });
});
