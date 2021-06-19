import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/cartContext';
import ProductModel from '../../helpers/types/ProductModel';
import styles from './ProductCard.module.scss';
import covers from '../../assets/images';
import CartIcon from '../../assets/svg/CartIcon';

const { card, cardCover, cardFull, picture, price, productDetails, title } = styles;
const { toCartBtn } = styles;

type cardStyleVersionType = 'full' | 'cover';

interface ProductCardType {
  ebook: ProductModel,
  cardStyleVersion: cardStyleVersionType,
  itemWidth?: number,
}

const ProductCard: React.FC<ProductCardType> = ({ ebook, cardStyleVersion, itemWidth }) => {
  const cartCtx = useContext(CartContext);
  const cover = covers.get(ebook.cover) || { small: '', medium: '' };

  return (
    <li className={`${card} ${cardStyleVersion === 'cover' ? cardCover : cardFull}`} style={{ width: `${itemWidth}px` }}>
      {/*--- CARD IS LINK TO PRODUCT PAGE ---*/}
      <Link to={{
        pathname: `/ebook/${ebook.title}-${ebook.author.firstName}-${ebook.author.lastName}`,
        state: {
          id: ebook.id,
        }
      }}>

        <picture >
          <source srcSet={`${cover.medium}`} media="(min-width: 1000px)" />
          <img src={`${cover.small}`} className={picture} alt="" />
        </picture>

        <div className={productDetails}>
          <h3 className={title}>{ebook.title}</h3>
          <cite>{`${ebook.author.firstName} ${ebook.author.lastName}`}</cite>
          <div className={price}>{`${ebook.price} zł`}</div>
        </div>
      </Link>

      {/* --- BUTTON ADD TO CART ---  */}
      <button className={toCartBtn} onClick={() => cartCtx.addToCart(ebook)}>
        <CartIcon width={26} height={26} strokeColor='white' />
      </button>
    </li>
  );
}

export default ProductCard;