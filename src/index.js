import React from 'react'
import './styles.module.scss'

export const CategoryCard = ({ imageUrl, onClick, categoryName }) => {
  return (
    <div className='category-card' onClick={onClick}>
      <div
        className='category-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-name'>{categoryName.toUpperCase()}</div>
    </div>
  )
}
