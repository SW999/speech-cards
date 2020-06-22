import * as React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import RedialProgressBar from './RedialProgressBar';

describe('<RedialProgressBar />', () => {
  test("RedialProgressBar doesn't render for one page", () => {
    render(<RedialProgressBar currentValue={1} total={1} />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  test('RedialProgressBar renders with correct class name', async () => {
    render(<RedialProgressBar currentValue={1} total={10} />);

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'class',
        'progress progress-10'
      );
    });
  });

  test('RedialProgressBar renders with correct text in the beginning', async () => {
    render(<RedialProgressBar currentValue={1} total={10} />);

    await waitFor(() => {
      expect(screen.getByText('10%')).toBeInTheDocument();
    });
  });

  test('RedialProgressBar renders with correct text for last slide', async () => {
    act(() => {
      render(<RedialProgressBar currentValue={5} total={5} delay={0} />);
    });

    await waitFor(() => {
      act(() => {
        expect(screen.getByText('Done')).toBeInTheDocument();
      });
    });
  });

  test('RedialProgressBar renders with correct text with label prop', async () => {
    const current = 1;
    const total = 10;
    render(
      <RedialProgressBar
        currentValue={current}
        total={total}
        label={`${current}/${total}`}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('1/10')).toBeInTheDocument();
    });
  });
});
