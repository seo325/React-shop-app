import React from 'react'
import CartItem from './cart-item/CartItem'
import { useAppSelector } from '../../../hooks/redux';

import styles from './CartList.module.scss';

const CartList = () => {
    const { products } = useAppSelector((state) => state.cartSlice)
    return (
        <div className={styles.cart_list}>
            {products.map((product) => (
                <CartItem key={product.id} item={product} />
            ))}
        </div>
    )
}

export default CartList