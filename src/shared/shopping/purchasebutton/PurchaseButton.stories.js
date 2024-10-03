import { PurchaseButton } from './PurchaseButton';

const meta = {
  title: 'Otus/Shopping/PurchaseButton',
  component: PurchaseButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button to add item to the cart',
      },
    },
  },
  argTypes: {
    count: {
      description: 'Number of items in the cart',
      control: 'number',
    },
  },
};

export default meta;

export const EmptyCartButton = {
  name: 'Without items',
  args: {
    count: 0,
  },
};

export const ButtonWithPurchase = {
  name: 'With items',
  args: {
    count: 2,
  },
};
