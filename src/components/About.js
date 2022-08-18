import profileImage from "./assets/profile_2.jpg" 
import Education  from "./Education" 
import Work  from "./Work" 
import Skill  from "./Skill" 

export default function About(){

    return(
        <>
        <section className="about-section text-white pt-5">
            <div className="container px-4 pb-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 justify-content-end text-center profile-image-div">
                    <img src={profileImage} alt="Profile Picture" className="profile-image bg-opacity-10"/> 
                </div>
                <div className="col-lg-7">
                    <div className="row aboutme-para pb-5">
                        <em><h4>About Me</h4></em>
                        <p className="text-white my-2 p-3 text-left">
                            Aspiring Full Stack Developer with 7 years of IT experience in testing and supporting
                            multiple platforms.Recognized for being an enthusiastic learner, team player and problem
                            solver with an eye for details. Passionate about developing apps by utilizing the newly
                            learned technologies like HTML,CSS,Bootstrap,Javascript ,JQuery,Node JS.
                        </p>
                        <p className="text-white my-2 px-3 py-2 text-left">
                            As a part of the Coding Boot Camp at UCLA Extension worked in a team  to develop a
                            Ecommerce Application using MERN Stack(Mongo DB,React,Node JS,Expree),GraphQL and styles using
                            Semantic UI and React Bootstrap.Application allows tea lovers to purchase there favourite tea online
                            and place an order.Order Summary and Products Page make use of GraphQL queries and mutation 
                            to display all the varieties of tea and render order details.
                            I am looking forward to working with a fast paced,quality-driven team to explore and 
                            build better experiences on the web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <div className="row education-skill g-0">
            <div className="col-lg-7">
                <Education/>
            </div>
            <div className="col-lg-5">
                <Skill className="gr-0"/>
            </div>
        </div>
        <Work/>
        </>
    )
}