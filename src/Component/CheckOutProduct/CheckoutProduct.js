/** @format */

import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const [{}, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p>⭐</p>
            ))}
        </div>
        <button className='' onClick={RemoveFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
