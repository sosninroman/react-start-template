import { Header } from './Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Otus/Common/Header',
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {};
