import profileImage from "./assets/profile_2.jpg" 
import Education  from "./Education" 
import Work  from "./Work" 
import Skill  from "./Skill" 

export default function About(){

    return(
        <>
        <section className="about-section text-white pt-5">
            <div class="container px-4 pb-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 justify-content-end text-center profile-image-div">
                    <img src={profileImage} alt="Profile Picture" className="profile-image bg-opacity-10"/> 
                </div>
                <div class="col-lg-7">
                    <div class="row aboutme-para pb-5">
                        <em><h4>About Me</h4></em>
                        <p class="text-white my-2 p-3 text-left">
                            Aspiring Full Stack Developer with 7 years of IT experience in testing and supporting
                            multiple platforms.Recognized for being an enthusiastic learner, team player and problem
                            solver with an eye for details. Passionate about developing apps by utilizing the newly
                            learned technologies like HTML,CSS,Bootstrap,Javascript ,JQuery,Node JS.
                        </p>
                        <p class="text-white my-2 px-3 py-2 text-left">
                            As a part of the Coding Boot Camp at UCLA Extension worked on a team of three to develop a
                            Road Trip Planner using Google and Yelp API and Javascript that will help the road trip
                            lovers to plan the trip,identify the routes,hotels and restaurants near the stop points and
                            many more individual projects.I am looking forward to working with a fast paced
                            ,quality-driven team to build better experiences on the web.
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