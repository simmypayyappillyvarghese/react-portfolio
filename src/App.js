import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
        <Navbar/>
        <Routes>  
          <Route path='/react-portfolio' element={<Home/>} />
          <Route path='/react-portfolio/home' element={<Home/>} />
          <Route path='/react-portfolio/about' element={<About/>} />
          <Route path='/react-portfolio/projects' element={<Projects/>} />
          <Route path='/react-portfolio/hireMe' element={<HireMe/>} />
        </Routes>
    </>
    )
}

export default App;
