import React from 'react';
import { Layout } from './Layout';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Layout> = {
  title: 'Otus/Common/Layout',
  component: Layout,
};

export default meta;

export const Default: StoryObj<typeof Layout> = {
  args: {
    children: [<div key={1} style={{ margin: 0, height: '500px' }} />],
  },
};
