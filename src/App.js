import Home from './components/Home';
import BootstrapNavbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <BootstrapNavbar/>
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/hireMe' element={<HireMe/>} />
        </Routes>
     </Router>
    )
}

export default App;
