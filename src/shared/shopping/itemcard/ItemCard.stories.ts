import { ItemCard } from './ItemCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ItemCard> = {
  title: 'Otus/Shopping/ItemCard',
  component: ItemCard,
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'number',
    },
    title: {
      control: 'text',
    },
    desc: {
      control: 'text',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ItemCard> = {
  args: {
    price: 100,
    title: 'Awesome thing',
    desc: 'Everyone needs it!',
  },
};
