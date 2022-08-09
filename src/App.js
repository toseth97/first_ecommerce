import { Routes, Route} from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
  );
}

export default App;
