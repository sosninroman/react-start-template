import React from 'react';
import { PurchaseButton } from '../purchasebutton/PurchaseButton';
import './itempage.css';

interface ItemPageProps {
  price: number;
  images: Array<number>;
  category: string;
  title: string;
  desc: string;
}

export const ItemPage = ({ price, images, category, title, desc }: ItemPageProps) => {
  return (
    <div>
      <div className="page__images">
        {images.map((imageId) => {
          return <img key={imageId} src={`https://prd.place/200/200?id=${imageId}`}></img>;
        })}
      </div>
      <p>Item: {title}</p>
      <p>Description: {desc}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <PurchaseButton />
    </div>
  );
};
