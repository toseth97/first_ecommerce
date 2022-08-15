import { Routes, Route} from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';
import Product_preview from './components/Product_preview';
import Error from './components/Error';
import Cart from './components/Cart';
import {useEffect, useState} from "react"



function App() {
  const [mobile, setMobile] = useState(false);
  const [products, setProduct] = useState([])
  const [isloading, setIsLoading] = useState(true)  
  const [search, setSearch] = useState("")
  const [range, setRange] = useState("")
  const [category, setCategory] =  useState("")
  const [filter_product, setFilter_product] =  useState([])
  const [allCart, setAllCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
  const [cartDisplay, setCartDisplay] = useState(false)
  const [quantity, setQuantity] = useState(1)


  const API_KEY = "https://fakestoreapi.com/products/"


  const handleMobile = () =>{
    setMobile(!mobile)
  }

  //Fetch data from Api and set to product state
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch(API_KEY);
        const data = await response.json();
        setProduct(data)
        setFilter_product(data)
        setIsLoading(false)
      }
      catch(error){
        console.log(error.message)
      }
    }

    fetchData()
  }, [])

  //feature products data
  const featured_product = products.filter(current =>{
    return current.id === 2 || current.id === 17 || current.id === 9
  })


  //Setting logic for the product page


  //handle the search product search bar
  const handleSearch = (event) =>{
    setSearch(event.target.value)
    const search_item = products.filter(current => {
      return (current.title).toLowerCase().includes(search.toLowerCase())
    })
    setFilter_product(search_item)
  }

  //handle the price range_input
  const handleRange = (event) =>{
    setRange(event.target.value)
    const range = event.target.value
    const search_item = filter_product.filter(current => {
      return range > current.price  
    })
    console.log(search_item)
    if(range == 0){
      setFilter_product(products)
    }else{
      setFilter_product(search_item)
    }
  }


  //handle product category selection
  const handleCategory = (params) =>{
    setCategory(params)
    const search_item = products.filter(current => {
      return (current.category).toLowerCase().includes(category.toLowerCase())
    })
    if(params === "All"){
      setFilter_product(products)
    }
    else{
      setFilter_product(search_item)
    } 
  }




  //handle the add product to cart button

  const handleAddToCart = (product,quantity_value) =>{
    const id = product.id 
    if(allCart.length === 0){
      const cart = {...product, quantity:quantity_value}
      const newCart = [...allCart, cart]
      localStorage.setItem("cart", JSON.stringify(newCart))
      setAllCart(newCart)
      alert("Item added to cart")
    } 
    else if(allCart.length > 0){
      for(let i = 0 ; i < allCart.length ; i++){
        if(allCart[i].id === id){
          alert("Product already in cart")
          return
        }else{
          const cart = {...product, quantity:quantity}
          const newCart = [...allCart, cart]
          localStorage.setItem("cart", JSON.stringify(newCart))
          setAllCart(newCart)
          
        }
      }
      alert("Item added to cart")
    }
    setQuantity(1)
    
  }

  //handle show cart
  const handleCart = () => {
    setMobile(false)
  }
  //handle product quantity
  
  const handleQuantity = (params) => {
    
    if(params === "plus"){
      setQuantity(quantity => quantity + 1)
    }
    else if( params === "minus" && quantity > 1){
      setQuantity(quantity => quantity - 1)
    }
  }

  //handle the remove product from cart button
  const handleDeleteItem = (params) => {
        console.log(params)
        const item = allCart.filter(item => {
          return item.id !== params
        })
        localStorage.setItem("cart", JSON.stringify(item))
        setAllCart(item)
  }

  return (
    <div className="App">
      <Navigation allCart = {allCart} mobile = {mobile} handleMobile = {handleMobile} handleCart = {handleCart} />
      <Routes>
        <Route exact path="/" element={<Home  isloading = {isloading} featured_product = {featured_product} /> } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products
          category = {category}
          search = {search}
          range = {range}
          handleRange = {handleRange}
          handleCategory = {handleCategory}
          handleSearch = {handleSearch}
          products = {filter_product}
          isloading = {isloading}
         />} />
         <Route path="/products/:id" element={<Product_preview cartDisplay = {cartDisplay} handleAddToCart = {handleAddToCart} handleQuantity={handleQuantity} quantity = {quantity} products = {products} isloading = {isloading} />} />
         <Route path="/cart" element={<Cart handleDeleteItem={handleDeleteItem} allCart = {allCart} cartDisplay = {cartDisplay} handleCart = {handleCart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
