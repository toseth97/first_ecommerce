import React from 'react'
import {useParams} from 'react-router-dom'

const Product_preview = () => {
 const {id} = useParams()
  return (
    <div>Product_preview</div>
  )
}

export default Product_preview