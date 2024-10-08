import { PurchaseButton } from './PurchaseButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PurchaseButton> = {
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
type Story = StoryObj<typeof PurchaseButton>;

export const EmptyCartButton: Story = {
  name: 'Without items',
  args: {
    count: 0,
  },
};

export const ButtonWithPurchase: Story = {
  name: 'With items',
  args: {
    count: 2,
  },
};
