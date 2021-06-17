import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/cartContext';

import styles from './Cart.module.scss'

const { cartItemsCounter, cartItemsCounterWrapper, cartIcon, cartIconWrapper } = styles;

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={cartIconWrapper}>
      <Link to={'/cart'} className={cartIcon}>
        <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
        </svg>
        <div className={cartItemsCounterWrapper}>
          <span className={cartItemsCounter}>{cartCtx.productsInCart.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Cart;