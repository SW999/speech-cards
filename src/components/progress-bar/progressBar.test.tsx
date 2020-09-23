import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('<RedialProgressBar />', () => {
  it("RedialProgressBar doesn't render for one page", () => {
    render(<ProgressBar currentValue={1} radius={23} stroke={4} total={1} />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
