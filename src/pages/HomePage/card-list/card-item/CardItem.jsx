import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import { useAppSelector } from '../../../../hooks/redux';

const CardItem = ({item}) => {
    console.log(item);
    const {products } =useAppSelector(state => state.cartSlice)
    const productMatching =products.some(product =>product.id === item.id);

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>
      <h5>{item.title.substring(0,15)}...</h5>
      <div>
        <button 
        disabled ={productMatching}
        >
            {productMatching ? "장바구니에 담긴 제품" :"장바구니에 담기"}
        </button>
        <p> ${item.price}</p>
      </div>
      </li>
  )

}

export default CardItem