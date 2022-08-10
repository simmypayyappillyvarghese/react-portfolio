import { Icon } from '@iconify/react';

export default function HireMe(){

    return(
    <section className="hireme  m-4">
        <span className="my-4 mx-3">
            <em>
               To know more about me and my work :
            </em>
        </span>
        <div className="hire-div d-flex flex-column  align-items-start justify-content-start py-5 px-0 ">
            <div className="d-flex justify-content-between align-items-center">
            <span className="mx-3">Connect via LinkedIn</span>
            <a href="https://www.linkedin.com/in/simmyvarghese/" target="_blank"><i
            className="fa fa-linkedin-square"></i>
            </a>
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
            <span className="mx-4 px-2">View my work in </span>
            <a href="https://github.com/simmypayyappillyvarghese" target="_blank"><i
            className="fa fa-github"></i>
            </a>
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
            <span className="mx-4 px-4">Follow me in </span>
            <a href="https://medium.com/@simmyvarghese5" target="_blank">
                <Icon className="iconify react-icon" icon="bi:medium"/>
            </a>
            </div>
            <address className="d-flex justify-content-between align-items-center my-2">
            <span className="mx-3"> Connect me via Email</span>
            <a href="mailto:simmyvarghese5@gmail.com"><i className="fa fa-send"></i></a>
            </address>
        </div>
    </section>
    );
}