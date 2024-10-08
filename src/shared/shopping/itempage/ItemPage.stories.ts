import { ItemPage } from './ItemPage';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ItemPage> = {
  title: 'Otus/Shopping/ItemPage',
  component: ItemPage,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ItemPage> = {
  args: {
    price: 100,
    title: 'Awesome thing',
    desc: 'Everyone needs it!',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    category: 'food',
  },
};
