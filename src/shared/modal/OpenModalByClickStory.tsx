import React, { useState } from 'react';
import { Modal } from './Modal';

export const OpenModalByClickStory = () => {
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('Hello, world!');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <input type="text" value={modalText} onChange={(event) => setModalText(event.target.value)} />
        <button onClick={() => setVisible(true)} disabled={modalText.length === 0}>
          Show modal
        </button>
      </div>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <p style={{ textAlign: 'center' }}>{modalText}</p>
      </Modal>
    </div>
  );
};
