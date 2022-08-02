
import resume from '../assets/Simmy_Varghese_Full_Stack_Developer.pdf'

export default function Intro(){

    return(
    <section className="intro">
        <p className="intro-para">
            <em>I'm <strong>Simmy Payyappilly Varghese</strong>, a california based Full
                            Stack Developer with a passion to create responsive web applications with intuitive design
                            and user experience
            </em>
        </p>
        <div className="intro-div d-flex align-items-center justify-content-start py-3">
            <a className="btn" href={resume} download>Download Resume</a>
            <a href="https://www.linkedin.com/in/simmyvarghese/" target="_blank"><i
            className="fa fa-linkedin-square m-2 p-2"></i>
            </a>
            <a href="https://github.com/simmypayyappillyvarghese" target="_blank"><i
            className="fa fa-github"></i>
            </a>
        </div>
    </section>
    );
}