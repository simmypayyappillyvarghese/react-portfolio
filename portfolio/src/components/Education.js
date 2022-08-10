
import { Icon } from '@iconify/react';

export default function Education(){

return(

<section className="education-section px-5">
    <div className="container py-5">
        <div className="row justify-content-start align-items-center">
            <h4 ><Icon icon="carbon:education"/> &nbsp;Education </h4> 
            <div class="col-lg-8 education-div">
                    <div class="row py-4">
                        <div class="col-lg-9">
                            <h4>UCLA Extension,</h4>
                            <em>Los Angeles</em>
                            <h6><em>Full Stack Web Development Certificate</em></h6>
                        </div>                  
                        <div class="col-lg-3">
                            <em>Aug 2022</em>
                        </div>
                    </div>    
                    <div class="row py-4">
                        <div class="col-lg-9">
                            <h4>INTERNATION TECHNOLOGICAL UNIVERSITY,</h4>
                            <em>San Jose</em>
                            <h6><em>Master Of Science , Software Engineering</em></h6>
                        </div>        
                        <div class="col-lg-3">
                            <em>Aug 2014 — Jun 2016</em>
                        </div>    
                    </div>
            </div>     
        </div> 
        </div>      
</section>

)

}