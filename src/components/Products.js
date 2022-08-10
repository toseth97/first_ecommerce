import React from 'react'

const Products = ({range, category, search, handleSearch, handleCategory, handleRange}) => {
  return (
    <main className = "parent product_main">
        <div className='container product'>
            <div className='filters'>
                <input placeholder='Search Item' type="text" />
                <div className="category">
                    <p className = "cat_header">Catergory</p>
                    <p onClick = {() => handleCategory("Men's clothing")}>Men's clothing</p>
                    <p onClick = {() => handleCategory("Jewelery")}>Jewelery</p>
                    <p onClick = {() => handleCategory("Jewelery")}>Electronics</p>
                    <p onClick = {() => handleCategory("Women's clothing")}>Women's clothing</p>
                </div>
                <div className="category">
                    <p className = "cat_header">Price</p>
                    <input type= "range" min= "0" max = "1000" />
                </div>


            </div>
            <div className='product-list'>
                <div></div>
                <div className = "all_products">

                </div>
            </div>
        </div>
    </main>
    )
}

export default Products