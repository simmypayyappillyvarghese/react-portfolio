import { Icon } from '@iconify/react';

export default function HireMe(){

    return(
        <>
    <section className="contact-section  my-5" id="contact">
    <div className="container px-4 px-lg-5">    
    <div className="row gx-4 gx-lg-5">
    <div className="col-md-12 mb-3 mb-md-0">
        <div className="card py-4 h-100 hire-div">
       
        <div className="card-body text-center row">
            <div className="col-md-4">
            <a href="https://www.linkedin.com/in/simmyvarghese/" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin-square"></i>
             </a>
            <h4 className="text-uppercase my-3">LinkedIn</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50">Connect me via Linkedin</div>
            </div>
            

            <div className="col-md-4">
            <a href="https://github.com/simmypayyappillyvarghese" target="_blank" rel="noreferrer"><i
            className="fa fa-github"></i>
            </a>
            <h4 className="text-uppercase my-3">Github</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50">View my works in Github</div>
            </div>

            <div className="col-md-4">
            <a href="https://medium.com/@simmyvarghese5" target="_blank" rel="noreferrer">
                <Icon className="iconify react-icon" icon="bi:medium"/>
            </a>
            <h4 className="text-uppercase my-3">Medium</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50">Follow me in Medium</div>
            </div>

        </div>
        </div>
        </div>
    </div>


    
    </div> 
       
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-12 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                        <div className="card-body text-center row">
                            <div className="col-md-4">
                                <i className="fa fa-map react-icon mb-2"></i>
                                <h4 className="text-uppercase my-3">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">Livermore,California</div>
                            </div>
                            <div className="col-md-4">
                            <a href="mailto:simmyvarghese5@gmail.com" target="_blank" rel="noreferrer">
                <Icon className="iconify react-icon" icon="cib:gmail"/>
            </a>
                                <h4 className="text-uppercase my-3">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">simmyvarghese5@gmail.com</div>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-phone react-icon mb-2"></i>
                                <h4 className="text-uppercase my-3">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">+1 (925) 523-1393</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}