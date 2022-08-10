import { Routes, Route} from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Error from './components/Error';
import {useEffect, useState} from "react"



function App() {
  const [mobile, setMobile] = useState(false);
  const [products, setProduct] = useState([])
  const [isloading, setIsLoading] = useState(true)

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
  
  

  return (
    <div className="App">
      <Navigation mobile = {mobile} handleMobile = {handleMobile} />
      <Routes>
        <Route exact path="/" element={<Home  isloading = {isloading} featured_product = {featured_product} /> } />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
