import { Icon } from '@iconify/react';

export default function Work(){

    return(

<section className="work-section py-2" id="work">
        <div className="container p-5">
            <div className="row justify-content-start align-items-center">
            <h4 ><Icon icon="emojione-monotone:desktop-computer"/> &nbsp;Work </h4> 
                <div className="col-lg-8 education-div p-3">
                    <div className="row py-4">
                        <div className="col-lg-9">
                            <div className="py-3 company-role">
                                <h4>Blackhawk Network, Pleasanton</h4>
                                <em>Front End Engineer</em>
                            </div>
                            <p>
                                Built page layouts and email templates according to customer parameters utilizing
                                reusable code using HTML5, CSS3, LESS, Bootstrap, and JSON. Monitored and troubleshot
                                Jenkins builds. Monitored websites utilizing Sentry and Splunk to rectify
                                front-end-related issues.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <em>Jul 2021 — Oct 2021</em>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-9">
                            <div className="py-3 company-role">
                                <h4>Blackhawk Network, Pleasanton</h4>
                                <em>Systems Support Analyst</em>
                            </div>
                            <p>
                                Analyzed and Identified many back end high priority data issues for ETL jobs.Created and
                                executed Test plan for the data loads.Increased efficiency and productivity of team by
                                automating many manual process.Developed and Maintained SQL scripts
                                to automate data updates.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <em>Dec 2016 — Jul 2021</em>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-9">
                            <div className="py-3 company-role">
                                <h4> Tech Mahindra Ltd,Pune, India</h4>
                                <em>Technical Associate</em>
                            </div>
                            <p>
                                Performed Functional ,Regressional and UI testing of various Siebel products .Maintained
                                test logs and defects for failed test cases.Executed Component and E2E testing to
                                identify interface defects at an early stage.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <em>Mar 2011 — Mar 2013</em>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
    );
}