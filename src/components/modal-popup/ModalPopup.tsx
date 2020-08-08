import React, { FunctionComponent, MouseEvent } from 'react';

type ModalPopupType = {
  callback?: () => void;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

const ModalPopup: FunctionComponent<ModalPopupType> = ({
  callback = () => undefined,
  isOpen,
  onClose,
  title = 'Are you sure?',
}) => {
  const onAccept = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    callback();
    onClose();
  };
  const handleClose = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    onClose();
  };
  const stopPropagation = (e: MouseEvent<HTMLElement>): void =>
    e.stopPropagation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-popup-wrapper"
      onClick={handleClose}
      tabIndex={-1}
      data-testid="overlay"
    >
      <div className="modal-popup" role="dialog" onClick={stopPropagation}>
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

export default ModalPopup;
