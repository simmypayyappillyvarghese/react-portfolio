
// import steepDream from './assets/Steep_Dreams.gif';
//  import assets from './assets';
import { Icon } from '@iconify/react';

export default function Projects(){

    return(
        // Featured Project
        <section className="projects-section py-5" id="projects">
        <h5 className="text-white-50 p-5 m-0 text-center"><em>My Projects</em></h5>
        <div className="container px-4 px-lg-5 pt-2">
            <div className="row gx-0 mb-4 mb-lg-5  justify-content-between align-items-start">
                <div className="col-xl-8 col-lg-9 col-12">
                    <img className="img-fluid mb-3 mb-lg-0 py-5" src={require('./assets/Steep_Dreams.gif')} alt="Snap of Main Project" />
                </div>
                <div className="col-xl-4 col-lg-3 col-12">
                    <div className="featured-text text-left text-lg-left px-2">
                        <h4><em className="text-white" >Steep Dream-Ecommerce App</em></h4>
                        <p className="text-white mb-0 mt-2 py-4">Steep Dream is an Ecommerce App created using (Node JS)
                        <span> Express.JS </span>, <span> React </span> and <span>Mongo DB </span>(MERN Stack).Steam Dream is an application that
                            allows the user to purchase tea online.
                            Application allows user to sign up and send sign up email notification to the user.Logged in user can add multiple products
                            or same product of varied quantity to the cart.
                            Application also allow user to place the order and view the order in the summary page.Also notify the user on order confirmation via email.
                            Currently the application has Payment and Seacrhbar as placeholder and is part of the future development
                        </p>
                         
                        <div className='d-flex justify-content-center align-items-center'>
                        <i className="fa fa-tag tech-tag mx-1"/>
                        <span>Node.JS, Express,Mongo DB,React(MERN Stack),Graph QL,Semantic UI </span>
                        </div>
                        <div className="project-icons d-flex justify-content-start align-items-center py-4">
                            <a href="https://glacial-fortress-58935.herokuapp.com/" target="_blank">
                            <Icon className="iconify react-icon" icon="cib:heroku"/>
                            </a>
                            <a href="https://github.com/simmypayyappillyvarghese/steep-dreams" target="_blank" rel="noreferrer">
                            <i className="fa fa-github github-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project 0 Row */}
            <div className="row gx-0 mt-5 mb-lg-0 pt-4 pb-1 justify-content-between" id="project-row-0">
                <div className="col-lg-7 col-12">
                    <img className="img-fluid h-100 " src={require('./assets/mixed-mood-login.png')}  alt="snapshot of mixed moode music app" />
                </div>
                <div className="col-lg-4 col-12">
                    <div className="bg-black text-left h-100" id="project-0">
                        <div className="d-flex h-100 align-items-center">
                            <div
                                className="d-flex flex-column project-text w-100 my-auto text-left text-lg-left justify-content-start align-items-center">
                                <h4 className="text-white py-2">Mixed Mood Music App</h4>
                                <p className="text-white">Mixed Music is a Node JS web application build using express.JS and sequelize(ORM tool) following MVC paradigm. Mixed-Mood Music App allows the user to play the songs based on the mood chosen also it allows the user to search for songs based on the artist name and save the favourite songs into their library
                                </p>
                                <p className="text-white">
                                    TechPad allows user to create tech blog posts,add comments(need to be signed
                                    in),view all the
                                    posts by other useras well in home tab,access their own posts from dasboard ,edit
                                    the post and delete the post as well.
                                </p>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i className="fa fa-tag tech-tag mx-1"></i>
                                <span>Node.JS,Express,Sequelize,Handlebars,Bootstrap,JS</span>
                                </div>
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">
                                    <a href="https://classique-croissant-67132.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <Icon className="iconify react-icon py-0 my-0 heroku-icon" icon="bxl:heroku"/>
                                    </a>
                                    <a href="https://github.com/simmypayyappillyvarghese/Mixed-Mood" target="_blank" rel="noreferrer">
                                        <i className="fa fa-github github-icon"></i>
                                    </a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- Project One Row- */}
            <div className="row gx-0 mt-5 mb-lg-0 pt-4 pb-1 justify-content-between my-4" id="project-row-1">
                <div className="col-lg-7"><img className="img-fluid h-100" src={require('./assets/tech_blog_home.png')}
                  alt="snapshot of tech blog site" />
                </div>
                <div className="col-lg-4">
                    <div className="bg-black text-left h-100" id="project-1">
                        <div className="d-flex h-100 align-items-center">
                            <div
                                className="d-flex flex-column project-text w-100 my-auto text-left text-lg-left align-items-center">
                                <h4 className="text-white py-2">Tech Blog Website</h4>
                                <p className="text-white">CMS style blog site based on MVC paradigm utilizing
                                    Handlebar.js as Templating Language and Sequalize as ORM and express-session npm
                                    package for authentication.
                                </p>
                                <p className="text-white">
                                    TechPad allows user to create tech blog posts,add comments(need to be signed
                                    in),view all the
                                    posts by other useras well in home tab,access their own posts from dasboard ,edit
                                    the post and delete the post as well.
                                </p>
                                <div className='d-flex justify-content-between align-items-center'>
                                <i className="fa fa-tag tech-tag d-flex flex-wrap mx-1"></i>
                                <span>Node.JS,Express,Sequelize,Handlebars,Bootstrap,JS</span>
                                </div>
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">
                                    <a href=" https://damp-woodland-35630.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <Icon className="iconify react-icon py-0 my-0 heroku-icon" icon="bxl:heroku"/></a>
                                    <a href="https://github.com/simmypayyappillyvarghese/techpad/" target="_blank" rel="noreferrer"><i
                                            className="fa fa-github github-icon"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Project Two Row--> */}
            <div className="row gx-0  mb-lg-0  pb-1 align-items-center justify-content-between my-4" id="project-row-2">
            <div className="col-lg-7">
                <img className="img-fluid h=100" src={require("./assets/weather-forecast-screenshot.png")}
                        alt="snapshot of weather dashboard" />
                        </div>
                <div className="col-lg-4 mx-1">
                    <div className="bg-black text-left h-100 project" id="project-2">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 py-4 my-auto text-left text-lg-left">
                                <h4 className="text-white py-2">US Weather Forecast Dashboard</h4>
                                <p className="text-white py-1">US Weather dashboard is an application created using
                                    HTML5,CSS3,Bootstrap,and JQuery which allows a user to check the weather in a
                                    particular city also provides the user with a 5 days weather forecast of the
                                    searched city</p>
                               <div className='d-flex justify-content-start align-items-center'>   
                                <i className="fa fa-tag tech-tag d-flex flex-wrap mx-1"></i>
                                 <span>HTML, CSS3 , Bootstrap, JS, JQUERY</span>
                                </div>
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">
                                    <a href="https://simmypayyappillyvarghese.github.io/us-daily-weather-forecast-dashboard/"
                                        target="_blank" rel="noreferrer">
                                     <Icon className="iconify react-icon my-0 heroku-icon pages-icon" icon="simple-icons:githubpages"/></a>
                                    <a href="https://github.com/simmypayyappillyvarghese/us-daily-weather-forecast-dashboard"
                                        target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 me-0" />
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            {/* <!-- Project Three Row--> */}
            <div className="row gx-0 pb-1 justify-content-between align-items-center my-4" id="project-row-3">
                <div className="col-lg-7"><img className="img-fluid h-100" src={require("./assets/roadtrip_planner_screenshot.png")}
                        alt="snapshot of road trip planner" />
                </div>
                <div className="col-lg-4 mx-1">
                    <div className="bg-black text-left" id="project-3">
                        <div className="d-flex align-items-center">
                            <div
                                className="d-flex flex-column project-text w-100 my-auto text-left text-lg-left align-items-center">
                                <h4 className="text-white py-2">California Road Trip Planner</h4>
                                <p className="text-white">California Road Trip Planner is a web Application created using
                                    HTML5,CSS3 and implemented its functionality using JS and JQ Libraries and styled
                                    using Bootstrap and JQUery UI Widgets.
                                    Application provides a route map with start and destination marker and checklist of
                                    attractions for user to select.
                                </p>
                                <p className="text-white">Once the user choose attraction using Google Direction Service,
                                    application creates a route and generate directions.Also provide user with the
                                    nearest dining options and display the restaurant name,address.
                                </p>
                                <div className='d-flex justify-content-between align-items-center'>   
                                <i className="fa fa-tag tech-tag d-flex flex-wrap mx-1"></i>
                                <span>HTML5,CSS3,Bootstrap,JS,JQuery and Jquery UI</span>
                                </div>
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">

                                    <a href="https://aaloksikand.github.io/California_Road_Trip_Planner/"
                                        target="_blank" rel="noreferrer">
                                    <Icon className="iconify react-icon my-0 heroku-icon pages-icon" icon="simple-icons:githubpages"/>
                                    </a>
                                    <a href="https://github.com/simmypayyappillyvarghese/California_Road_Trip_Planner"
                                        target="_blank" rel="noreferrer"><i className="fa fa-github github-icon"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Other projects--> */}

            <div className="row d-flex pb-1 justify-content-between align-items-start my-4 py-4" id="project-row-4">
                <div className="col-lg-4">
                    <div className="bg-black text-left project" id="project-4">
                        <div className="d-flex align-items-start justify-content-center">
                            <div
                                className="d-flex flex-column project-text  my-auto text-left text-lg-left align-items-center justify-content-start">
                                <h4 className="text-white pb-4">Note Taker</h4>
                                <img className="img-fluid  text-center py-1" src={require("./assets/screenshot-note-taker.png")}
                                    alt="snapshot of note taker" />
                                <p className="text-white py-4 mt-5 mb-3">This is a note down application used to write and save
                                    notes. This Project creates a backend for the application using Express.js.
                                    Express.js defines the route to view the notes,to save the notes and delete the
                                    notes.
                                </p>
                                <div className="d-flex justify-content-between align-items-start">
                                <i className="fa fa-tag tech-tag d-flex flex-wrap"></i>
                                <span>HTML5,CSS3,Bootstrap,Express.js,Node.js</span>
                                </div>    
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">
                                    <a href="https://express-note-down-app.herokuapp.com/" target="_blank" rel="noreferrer">
                                <Icon  className="iconify react-icon my-0 heroku-icon" icon="bxl:heroku"/></a>
                                    <a href="https://github.com/simmypayyappillyvarghese/note-down-app"
                                        target="_blank" rel="noreferrer"><i className="fa fa-github github-icon"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="bg-black text-left  project" id="project-5">
                        <div className="d-flex align-items-start justify-content-center">
                            <div
                                className="d-flex flex-column project-text  my-auto text-left text-lg-left align-items-center justify-content-start">
                                <h4 className="text-white pb-4 ">Team Profile Generator</h4>
                                <img className="img-fluid  text-center" src={require("./assets/teamprofile-screenshot.png")}
                                    alt="snapshot of team profile dashboard" />
                                <p className="text-white py-4">This is a Node JS CLI Application that use
                                    inquirer package to collect employee info and build a team profile.Application will
                                    generate an HTML page using npm package fs with the user entered info.
                                </p>
                                <div className="d-flex justify-content-between align-items-center py-4">
                                <i className="fa fa-tag tech-tag d-flex flex-wrap mx-1"></i>
                                <span>HTML5,CSS3,Bootstrap,Node.js,Inquirer ,fs(npm packages)</span>
                                </div>    
                                <div className="project-icons d-flex justify-content-start align-items-start">
                                    <a href="https://github.com/simmypayyappillyvarghese/team-profile-dashboard"
                                        target="_blank" rel="noreferrer"><i className="fa fa-github github-icon"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="bg-black text-left  project" id="project-6">
                        <div className="d-flex">
                            <div
                                className="d-flex flex-column project-text w-100 my-auto text-left text-lg-left align-items-center justify-content-start">
                                <h4 className="text-white pb-4">Employee Data Managemen System</h4>
                                <img className="img-fluid  text-center"
                                    src={require("./assets/CLI screenshot-EmployeeTracker.png")}
                                    alt="snapshot of employee management system" />
                                <p className="text-white my-4">CMS application that allows to view and manage employee
                                    data.Application is created using Node JS utilizing the npm packages like
                                    inquirer,mysql2.This command line application interact with uservia the inquirer
                                    package and interact with database using mysql2 package to get the requested data.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-tag tech-tag d-flex flex-wrap mx-1"></i>
                                <span>Node,Inquirer(npm package),mysql2</span>
                                </div>
                                <div className="project-icons d-flex justify-content-start align-items-center py-3">
                                    <a href=" https://github.com/simmypayyappillyvarghese/employee-data-management-system"
                                        target="_blank" rel="noreferrer"><i className="fa fa-github github-icon"></i></a>
                                </div>
                                <hr className="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );

}