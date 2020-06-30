import * as React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import RedialProgressBar from './RedialProgressBar';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<RedialProgressBar />', () => {
  it("RedialProgressBar doesn't render for one page", () => {
    render(<RedialProgressBar currentValue={1} total={1} />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('RedialProgressBar renders with correct class name', async () => {
    render(<RedialProgressBar currentValue={1} total={10} delay={1} />);
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'class',
        'progress progress-10'
      );
    });
  });

  it('RedialProgressBar renders with correct text in the beginning', async () => {
    render(<RedialProgressBar currentValue={1} total={10} delay={1} />);
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('10%')).toBeInTheDocument();
    });
  });

  it('RedialProgressBar renders with correct text for last slide', async () => {
    const { rerender } = render(
      <RedialProgressBar currentValue={4} total={5} delay={1} />
    );
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('80%')).toBeInTheDocument();
    });

    rerender(<RedialProgressBar currentValue={5} total={5} delay={0} />);
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('Done')).toBeInTheDocument();
    });
  });

  it('RedialProgressBar renders with correct text for prev slide', async () => {
    const { rerender } = render(
      <RedialProgressBar currentValue={4} total={5} delay={1} />
    );
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('80%')).toBeInTheDocument();
    });

    rerender(<RedialProgressBar currentValue={3} total={5} delay={0} />);
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('60%')).toBeInTheDocument();
    });
  });

  it('RedialProgressBar renders with correct text with label prop', async () => {
    const current = 1;
    const total = 10;
    render(
      <RedialProgressBar
        currentValue={current}
        total={total}
        label={`${current}/${total}`}
      />
    );
    act(() => jest.advanceTimersByTime(100));

    await waitFor(() => {
      expect(screen.getByText('1/10')).toBeInTheDocument();
    });
  });
});
