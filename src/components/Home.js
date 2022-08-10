import React from 'react'
import Typewriter from 'typewriter-effect';
import Featured_products from './Featured_products';
import value from './value'


const Home = ({isLoading, featured_product}) => {


  return (
    <main className = "home_wrapper routes">

    {/****WELCOME PART*****/}

      <section className="home_introduction">
        <div className="site_description">
          <div className='text'>
            <Typewriter  className = "typewriter"
              options={{
                strings: ['Order from the comfort of your home.', 'Get products at discounted rates.', "Let us be your everyday delivery."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className='intro_paragraph'>
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
                return (<div className='each_featured_product'>
                  <Featured_products key = {current.id} current = {current} />
                </div>)
            })}
          </div>
          <button className = "shop_now">All Product</button>
        </div>
      </section>

      <section className= "parent all_value">
        <div className="container value_container">
           <div className = "core_value">
            <h2>Customize your look with ease</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
           </div>
           <div className='value_wrapper'>
              { value.map(current => {
                return (<div className='each_value'>
                    <p className = "value_heading">{current.heading}</p>
                    <p className = "value_body">{current.body}</p>
                </div>)
              })}
           </div>
        </div>
      </section>
      <section className='parent newsletter_wrapper'>
        <div className = "newsletter">
          <div className = "letter_text">
            <h2>Join our newsletter and get 20% off</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
          </div>
        
          <form className="newsletter_form">
            
            <input className='subscribe_input' 
            id = "input_id"
            type="email"
            autoComplete='false'
            required
            />
            <label className='input_label' htmlFor='input_id'>Email Address</label>
            <button className = "subscribe">
              Subscribe Now
            </button>
          </form>

          
        </div>
      </section>








    </main>
  )
}

export default Home