import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import MasterForm from './MasterForm';

jest.mock('../../utils', () => ({
  ...jest.requireActual('../../utils'),
  debounce: fn => {
    fn.cancel = jest.fn();
    return fn;
  },
  downloadFile: jest.fn(),
  normalizeState: jest.fn(),
  saveToStorage: jest.fn(),
}));

describe('MasterForm', () => {
  it('MasterForm renders with default props', () => {
    render(<MasterForm />);

    expect(screen.getByRole('button', { name: 'Save speech' })).toBeDisabled();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('MasterForm shows validation message for next step in case title is empty', async () => {
    render(<MasterForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Create card' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  it('MasterForm enables 2nd step when title was filled', async () => {
    render(
      <HashRouter>
        <MasterForm />
      </HashRouter>
    );

    fireEvent.change(screen.getByLabelText('Speech name:'), {
      target: { value: 'Test' },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: 'Back' })
      ).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Create card' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });
  });

  it('MasterForm goes to prev step', async () => {
    render(<MasterForm />);

    fireEvent.change(screen.getByLabelText('Speech name:'), {
      target: { value: 'Test' },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: 'Back' })
      ).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Create card' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Back' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Speech name:')).toBeInTheDocument();
    });
  });

  it('MasterForm saves speech on 2nd step', async () => {
    render(<MasterForm />);

    fireEvent.change(screen.getByLabelText('Speech name:'), {
      target: { value: 'Test' },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: 'Back' })
      ).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Create card' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Topic title:'), {
      target: { value: 'Test1' },
    });

    fireEvent.change(screen.getByLabelText('Idea:'), {
      target: { value: 'Test2' },
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Save speech' })).toBeEnabled();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Save speech' }));

    await waitFor(() => {
      expect(
        screen.getByText('Your speech was successfully saved!')
      ).toBeInTheDocument();
    });
  });
});
