import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalPopup from './ModalPopup';
const defaultProps = {
  isOpen: false,
  onClose: (): void => undefined,
};

describe('<ModalPopup />', () => {
  it("ModalPopup doesn't render at start", () => {
    render(<ModalPopup {...defaultProps} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('ModalPopup renders on the page', () => {
    render(<ModalPopup {...defaultProps} isOpen />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('ModalPopup runs a callback on click "Yes"', async () => {
    const doCallback = jest.fn();
    render(
      <ModalPopup
        isOpen
        onClose={(): void => undefined}
        callback={doCallback}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Yes' }));

    await waitFor(() => {
      expect(doCallback).toHaveBeenCalledTimes(1);
    });
  });

  it('ModalPopup fires onClose function on click "No"', async () => {
    const onClose = jest.fn();
    render(<ModalPopup isOpen onClose={onClose} />);
    userEvent.click(screen.getByRole('button', { name: 'No' }));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('ModalPopup fires onClose function on click outside', async () => {
    const onClose = jest.fn();
    render(<ModalPopup isOpen onClose={onClose} />);
    userEvent.click(screen.getByTestId('overlay'));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it("ModalPopup doesn't run onClose when click on popoup body", async () => {
    const onClose = jest.fn();
    render(<ModalPopup isOpen onClose={onClose} />);
    userEvent.click(screen.getByRole('dialog'));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(0);
    });
  });
});
