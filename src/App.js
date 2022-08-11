import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter basename='/react-portfolio'>
        <Navbar/>
        <Routes>  
          <Route exact path='/react-portfolio' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/hireMe' element={<HireMe/>} />
        </Routes>
     </BrowserRouter>
    )
}

export default App;
