import React from 'react';
import { render, screen } from '@testing-library/react';
import SpeechesList from './SpeechesList';
const mockedProps = {
  editSpeech: jest.fn(),
  removeSpeech: jest.fn(),
  showSpeech: jest.fn(),
  speechNames: [],
};
describe('<SpeechesList />', () => {
  it('SpeechesList shows message in case no saved speeches', () => {
    render(<SpeechesList {...mockedProps} />);

    expect(screen.getByTestId('no-speeches')).toBeInTheDocument();
  });

  it('SpeechesList shows list of speeches', () => {
    render(
      <SpeechesList
        {...mockedProps}
        speechNames={['speech_test1', 'speech_test2']}
      />
    );

    expect(screen.queryByTestId('no-speeches')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
    expect(screen.getByRole('button', { name: 'test1' })).toBeInTheDocument();
  });
});
