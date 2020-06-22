import * as React from 'react';
import { FunctionComponent, MouseEvent, useEffect, useState } from 'react';

type ModalPopupType = {
  callback: () => void;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export const ModalPopup: FunctionComponent<ModalPopupType> = ({
  callback,
  isOpen,
  onClose,
  title = 'Are you sure?',
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  const onAccept = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (typeof callback === 'function') {
      callback();
    }
    onClose();
  };
  const handleClose = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal-popup-wrapper" onClick={handleClose}>
      <div className="modal-popup">
        <div className="modal-popup-header">{title}</div>
        <div className="modal-popup-body">
          <button className="btn" onClick={onAccept}>
            Yes
          </button>
          <button className="btn" onClick={handleClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
