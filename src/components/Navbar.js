
 import { Nav, Navbar} from 'react-bootstrap';

 import { Link } from 'react-router-dom';
export default function BootstrapNavbar(){

   return (
            // <Navbar className="navbar navbar-expand-lg py-4 px-5">
                // <a className="navbar-brand" href="#">
                //     <span className='logo'>SimmY</span>
                //     </a>
            //     <button class="navbar-toggler bg-white" type="button" data-toggle="collapse"
            //      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //              <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    // <ul className="navbar-nav mr-auto">
                    //     <li className="nav-item">       
                    //         <a className="nav-link" href="/react-portfolio/home">Home</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a className="nav-link" href="/react-portfolio/about">About</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a className="nav-link" href="/react-portfolio/projects">Projects</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a className="nav-link" href="/react-portfolio/hireMe">Hire Me</a>
                    //     </li>
                    // </ul>
            //     </div>
            // </Navbar>

    <Navbar collapseOnSelect  expand="lg" className='p-4'>
             <a className="navbar-brand" href="#">
                    <span className='logo'>SimmY</span>
                    </a>
      <Navbar.Toggle className='bg-white mr-auto'/>
      <Navbar.Collapse>
        <Nav className="ml-5 d-block">
          <ul className="navbar-nav ml-auto">
                        <li className="nav-item">       
                            <a className="nav-link" href="/react-portfolio/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react-portfolio/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react-portfolio/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react-portfolio/hireMe">Hire Me</a>
                        </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
   )

}