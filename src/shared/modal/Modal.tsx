import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export const Modal = ({ visible, children }: ModalProps): React.ReactElement => {
  if (!visible) return null;
  return (
    <div className="modal-background">
      <div className="modal-dialog">
        <span className="modal-close">&times;</span>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
