import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';

const CardItem = ({item}) => {
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
      </li>
  )

}

export default CardItem