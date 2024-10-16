import React, { useState } from 'react';
import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Otus/Common/Modal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  args: {
    visible: true,
    children: [
      <p key={1} style={{ textAlign: 'center' }}>
        Hello, World!
      </p>,
    ],
  },
};

const OpenModalByClick = () => {
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('Hello, world!');

  const openModal = () => {
    if (!visible) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <input type="text" value={modalText} onChange={(event) => setModalText(event.target.value)} />
        <button onClick={openModal} disabled={modalText.length === 0}>
          Show modal
        </button>
      </div>
      <Modal visible={visible}>
        <p style={{ textAlign: 'center' }}>{modalText}</p>
      </Modal>
    </div>
  );
};

export const OpenModal: StoryObj<typeof Modal> = {
  name: 'Interactive modal example',
  render: () => <OpenModalByClick />,
};
