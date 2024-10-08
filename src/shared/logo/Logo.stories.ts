import { Logo } from './Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  title: 'Otus/Common/Logo',
  component: Logo,
};

export default meta;

export const Default: StoryObj<typeof Logo> = {};
