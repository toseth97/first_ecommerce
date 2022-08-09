import React from 'react'
import Typewriter from 'typewriter-effect';
import Featured_products from './Featured_products';


const Home = ({isLoading, featured_product}) => {

  return (
    <main className = "home_wrapper">

    {/****WELCOME PART*****/}

      <section className="home_introduction">
        <div className="site_description">
          <div className='text'>
            <Typewriter className = "typewriter"
              options={{
                strings: ['Order from the comfort of your home.', 'Get products at discounted rates.', "Let us be your everyday delivery."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
          </p>
          <button className = "shop_now">Shop Now</button>
        </div>
        <div className="site_image">
          <img src="./shopping.png" alt="site_image " />
        </div>
      </section>

      {/****FEATURED PRODUCTS*****/}

      <section className="parent">
        <div className="container">
          <h2>Featured Products</h2>
          <div className='underLine'></div>
          <div className='featured_product'>
            {featured_product.map(current =>{
                return <div className='each_featured_product'>
                  <Featured_products key = {current.id} current = {current} />
                </div>
            })}
          </div>
          <button className = "shop_now">All Product</button>
        </div>
      </section>

      <section className= "parent all_value">
        <div className="container">
           <div className = "core_value">
            <h2>Customize your look with ease</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
           </div>
        </div>
      </section>


    </main>
  )
}

export default Home