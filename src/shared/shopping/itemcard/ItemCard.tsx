import React from 'react';
import { PurchaseButton } from '../purchasebutton/PurchaseButton';
import './itemcard.css';

interface ItemCardProps {
  price: number;
  title: string;
  desc: string;
}

export const ItemCard = ({ price, title, desc }: ItemCardProps): React.ReactElement => {
  return (
    <div className="card">
      <img className="card__image" src="https://prd.place/200/200" />
      <p className="card__text card__title">{title}</p>
      <p className="card__text card__description">{desc}</p>
      <div className="card__price-group">
        <p className="card__price">{price}</p>
        <PurchaseButton additionalClass="card__button" />
      </div>
    </div>
  );
};
