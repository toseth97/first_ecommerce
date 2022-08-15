import React from 'react'

const CartItem = ({item, handleDeleteItem}) => {
  const id = item.id
  return (
    <main className='cart_item_parent'>
      <div className = "cart_items">
        <img src = {item.image} alt = {item.title} />
        
          <p className='item_cart_name'> {`${(item.title).slice(0,25)}...`} </p>
          <p>{item.quantity}</p>
          <p>$ {item.price}</p>
          <i className='bx bxs-trash-alt' onClick={() => handleDeleteItem(id)}></i>
     
      </div>
    </main>
  )
}

export default CartItem