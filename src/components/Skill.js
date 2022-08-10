import { Icon } from '@iconify/react';

export default function Skill(){
 return(   
<section className="skill-section px-5" id="skill">
    <div className="container py-5">
        <h4 ><Icon icon="fa-solid:tools"/> &nbsp;Skills </h4> 
        <div className="row py-5">
            <div className="col-lg-10 d-flex justify-content-around py-2 flex-wrap">
                <h3><Icon  icon="mdi:language-html5" style={{color: '#e34c26'}}/></h3>
                <h3><Icon icon="logos:bootstrap" style={{color: '#0769ad'}}/></h3>
                <h3><Icon icon="la:node"/></h3>
                <h3><Icon icon="file-icons:sequelize" style={{color:'#87cefa'}}/></h3>
                <h3><Icon icon="logos:javascript"/></h3>
                <h3><Icon icon="vscode-icons:file-type-mongo"/></h3>
                <h3><Icon icon="logos:npm"/></h3>
            </div>
        </div>         

        <div className="row py-4">
            <div className="col-lg-10 d-flex justify-content-evenly p-2 flex-wrap">
                <h3><Icon icon="cib:jquery" style={{color: "#0769ad"}}/></h3>
                <h3><Icon icon="logos:express"/></h3>
                <h3><Icon icon="bxl:css3" style={{color:'#2965f1'}}/></h3>
                <h3><Icon icon="simple-icons:handlebarsdotjs" style={{color:'#5c4848'}}/></h3>
                <h3><Icon icon="logos:mysql"/></h3>
                <h3><Icon icon="logos:heroku-icon"/></h3>
                <h3><Icon icon="logos:react"/></h3>
                <h3><Icon icon="logos:graphql"/></h3>
 
            </div>
        </div>    

    </div>       
</section>);

}