import { ItemCard } from './ItemCard';

const meta = {
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

export const Default = {
  args: {
    price: 100,
    title: 'Awesome thing',
    desc: 'Everyone needs it!',
  },
};
