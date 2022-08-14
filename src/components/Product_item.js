import React from 'react'
import {Link} from 'react-router-dom'

const Product_item = ({product}) => {
    const image = product.image
    const id = product.id
    const price = product.price
    const title = product.title
  return (
    <div className='grid_item'>
      {id === 19 ? <p className='best_selling'>Best Selling</p> : id === 2? <p className='best_selling'>Best Selling</p> :null}
        <Link to = {`/products/${id}`}>
          <img className='item_image' src = {image} alt = {title} />
          <div>
              <p className = "item_title">{title.length > 50? `${title.slice(0,50)}...` : title}</p>
              <p className = "item_price">{`$ ${price}`}</p>
          </div>
        </Link>
    </div>
  )
}

export default Product_item