import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import CardItem from './card-item/CardItem';
import styles from './CardList.module.scss';
import { fetchProducts } from '../../../store/products/products.slice';
import CardSkeleton from '../card-skeleton/CardSkeleton';

const CardList = () => {
    const dispatch =useAppDispatch();
    const {products , isloading} = useAppSelector((state) =>state.productsSlice)
    const category = useAppSelector(state => state.categoriesSlice)

    if(isloading) return <CardSkeleton />
    useEffect(() => {
        dispatch(fetchProducts(category?.toLowerCase()));
    }, [category])
    return (
        <ul className={styles.card_list}>
            {products.map(product => <CardItem key={product.id} item={product} />)}
        </ul>
    )
}

export default CardList