import React from 'react';
import { Trash2 } from 'lucide-react';
import './cartitem.css';

interface CartItemProps {
  title: string;
}

export const CartItem = ({ title }: CartItemProps): React.ReactElement => {
  return (
    <div className="cart-item">
      <p className="cart-item__title">{title}</p>
      <div className="cart-item__remove-button">
        <Trash2 color="red" />
      </div>
    </div>
  );
};
