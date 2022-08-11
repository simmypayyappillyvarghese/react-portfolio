


export default function Navbar(){

   return (
            <nav className="navbar navbar-expand-lg py-4 px-5">
                <a className="navbar-brand" href="#">
                    {/* <img src={logo} className="logo"/> */}
                    <span className='logo'>Simmy</span>
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/react-portfolio/home">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/react-portfolio/about">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/react-portfolio/projects">Projects</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/react-portfolio/hireMe">Hire Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
   )

}