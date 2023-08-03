import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import styles from './CountProducts.module.scss'
const CountProducts = () => {
   const {products , isloading }= useAppSelector(state => state.productsSlice)
  return (
    <div className={styles.count_products}>
    {!isloading && (
        <p>
            Showing: {products.length} items
        </p>
    )}
</div>
  )
}

export default CountProducts