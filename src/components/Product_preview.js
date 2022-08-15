import React from 'react'
import {useParams, Link} from 'react-router-dom'

const Product_preview = ({products,cartDisplay ,handleAddToCart, quantity, handleQuantity}) => {
  const {id} = useParams()
  const allProducts = products? products: null
  const product = allProducts.find(current => {
    return current.id == id
  })
  return (
    <main className='parent'>
      <div className=' container item_review'>
        <div className='img_item'>
          <img src={product.image} alt='Item Image' />
        </div>
        <div className='item_details'>
          <h1>{product.title}</h1>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>

          <div className='cartInput'>
            <div onClick={() => handleQuantity("plus")} className='cart_button'>
              <p>+</p>
            </div>
            <div className='quantity'>{quantity}</div>
            <div onClick={() => handleQuantity("minus")} className='cart_button'>
              <p>-</p>
            </div>
          </div>
         
          <button className = "shop_now" onClick={()=> handleAddToCart(product,quantity)}>Add to Cart</button>
         
          <Link to = "/products"> 
            <button className = "back">Go back</button>
          </Link>
          
        </div>
      </div>
     
    </main>
  )
}

export default Product_preview