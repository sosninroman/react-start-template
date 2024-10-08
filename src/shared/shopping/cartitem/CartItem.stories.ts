import { CartItem } from './CartItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CartItem> = {
  title: 'Otus/Shopping/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof CartItem> = {
  args: {
    title: 'Awesome thing',
  },
};
