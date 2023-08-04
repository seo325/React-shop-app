import React from 'react'
import styles  from './categoryTab.module.scss'
import {  useSelector } from 'react-redux'
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

const categoryTab = ({text, categoryName}) => {

   const dispatch =useAppDispatch()
   const category = useAppSelector((state)=> state.categoriesSlice); 
//    console.log(category)
   const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName))
}

  return (
    <button className={
        categoryName === category
        ? styles.active_category
        :styles.category_button
    }
    onClick={getActiveCategory}
    >
        {text}</button>
    )
}

export default categoryTab