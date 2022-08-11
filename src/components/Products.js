import React from 'react'
import Product_item from './Product_item';

const Products = ({range, category, search, handleSearch, handleCategory, handleRange, products, isloading}) => {
  return (
    <main className = "parent product_main">
        <div className='container product'>
            <div className='filters'>
                <input placeholder='Search Item' className='Search_item' type="text" />
                <div className="category">
                    <p className = "cat_header">Catergory</p>
                    <p className='option' onClick = {() => handleCategory("All")}>All</p>
                    <p className='option' onClick = {() => handleCategory("Men's clothing")}>Men's clothing</p>
                    <p className='option' onClick = {() => handleCategory("Jewelery")}>Jewelery</p>
                    <p className='option' onClick = {() => handleCategory("Jewelery")}>Electronics</p>
                    <p className='option' onClick = {() => handleCategory("Women's clothing")}>Women's clothing</p>
                </div>
                <div className="category">
                    <p className = "cat_header">Price</p>
                    <p> $ {range? range: 0}</p>
                    <input className='range_input' type= "range" min= "0" max = "1000" value={range? range: 0} onChange = {handleRange} />
                </div>
                <button className= "shop_now">Clear Filter</button>
   
            </div>
            <div className='product_list'>
                <div className='product_top'>
                    <p>{`${products.length} Products Found`}</p>
                    <div className='product_line'></div>
                </div>
                <div className = "all_products">
                    {products.map(product => {
                        return <Product_item key = {products.id} product = {product} />
                    })}
                </div>
            </div>
        </div>
    </main>
    )
}

export default Products