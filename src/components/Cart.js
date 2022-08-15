import React from 'react'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'

const Cart = ({allCart , cartDisplay, handleCart, handleDeleteItem}) => {
    const allPrice = allCart.map(item => {
        return item.price
    })
    let totalPrice = 0
    for (let i = 0; i < allPrice.length; i++) {
        totalPrice += allPrice[i]
    }
    
  return (
    <main className= "myCart" >
        <div className = "myCart_container">
            <h2> Your Cart</h2>
            <div className = "cart_content_div">
                {allCart.length === 0 ? 
                    <div>
                        <p className = "empty_cart">Your Cart Is Empty...</p>
                        <Link to = "/products">
                            <button onClick={handleCart} className = "shop_now" >Go to products </button>
                        </Link>
                    </div>
                    :
                    <>
                        {allCart.map(item => {
                                return <CartItem key={item.id} item={item} handleDeleteItem = {handleDeleteItem} />
                            })}

                            <div className='total_main'>
                                <div className='subtotal'>
                                    <div>
                                    <h4>Total Price</h4>
                                    <h4 className = "item_total_price">${totalPrice}</h4>
                                    </div>
                                    <p>
                                        proceed to CheckOut
                                    </p>

                                </div>
                            </div>
                    </>
                
                }
            </div>
        </div>
    </main>
  )
}

export default Cart