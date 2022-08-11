import React from 'react'

const Product_item = ({product}) => {
    const image = product.image
    const price = product.price
    const title = product.title
  return (
    <div className='grid_item'>
        <img className='item_image' src = {image} alt = {title} />
        <div>
            <p className = "item_title">{title}</p>
            <p className = "item_price">{`$ ${price}`}</p>
        </div>
    </div>
  )
}

export default Product_item