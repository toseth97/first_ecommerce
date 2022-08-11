import { Routes, Route} from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';
import Product_preview from './components/Product_preview';
import Error from './components/Error';
import {useEffect, useState} from "react"



function App() {
  const [mobile, setMobile] = useState(false);
  const [products, setProduct] = useState([])
  const [isloading, setIsLoading] = useState(true)  
  const [search, setSearch] = useState("")
  const [range, setRange] = useState("")
  const [category, setCategory] =  useState("")

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

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }
  const handleRange = (event) =>{
    setRange(event.target.value)
  }
  const handleCategory = (event) =>{
    setCategory(event.target.value)
  }
  
  

  return (
    <div className="App">
      <Navigation mobile = {mobile} handleMobile = {handleMobile} />
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
          products = {products}
          isloading = {isloading}
         />} />
         <Route path="/products/:productId" element={<Product_preview />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
