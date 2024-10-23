import React from 'react';
import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { OpenModalByClickStory } from './OpenModalByClickStory';

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

export const OpenModal: StoryObj<typeof Modal> = {
  name: 'Interactive modal example',
  render: () => <OpenModalByClickStory />,
};
