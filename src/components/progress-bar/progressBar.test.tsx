import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  it("RedialProgressBar doesn't render for one page", () => {
    render(<ProgressBar currentValue={1} radius={23} stroke={4} total={1} />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('ProgressBar renders with correct class name', async () => {
    render(<ProgressBar currentValue={2} radius={23} stroke={4} total={2} />);

    await waitFor(() => {
      expect(screen.getByTestId('progress-bar')).toHaveAttribute(
        'class',
        'progress--bar progress--bar__done'
      );
    });
  });

  it('ProgressBar renders with correct text in the beginning', async () => {
    render(<ProgressBar currentValue={1} radius={23} stroke={4} total={2} />);

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        '50%'
      );
    });
  });

  it('ProgressBar renders with correct text for last slide', async () => {
    const { rerender } = render(
      <ProgressBar currentValue={4} radius={23} stroke={4} total={5} />
    );

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        '80%'
      );
    });

    rerender(<ProgressBar currentValue={5} radius={23} stroke={4} total={5} />);

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        'Done'
      );
    });
  });

  it('ProgressBar renders with correct text for prev slide', async () => {
    const { rerender } = render(
      <ProgressBar currentValue={4} radius={23} stroke={4} total={5} />
    );

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        '80%'
      );
    });

    rerender(<ProgressBar currentValue={3} radius={23} stroke={4} total={5} />);

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        '60%'
      );
    });
  });

  it('ProgressBar renders with correct text with label prop', async () => {
    const current = 1;
    const total = 10;
    render(
      <ProgressBar
        currentValue={current}
        label={`${current}/${total}`}
        radius={23}
        stroke={4}
        total={total}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'data-res',
        '1/10'
      );
    });
  });
});
