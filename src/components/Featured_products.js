import React from 'react'

const Featured_products = (current) => {
  const id = current.current.id
  const image = current.current.image
  const price = current.current.price
  const title = current.current.title



  return (
    <>
        {id === 17 ? <p className='best_selling'>Best Selling</p> : null}
        <img src = {image} alt = {title} />
        <div>
            <p className = "item_title">{title}</p>
            <p className = "item_price">{`$ ${price}`}</p>
        </div>
    </>
  )
}

export default Featured_products