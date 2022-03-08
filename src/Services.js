import React from 'react';
import "./Services.css";

function Services() {
    return(
        <div className="ServicesContainer">
            <div className="pic2Container">
                <div className="pic2">
                    <img src="/images/garcia.jpg" alt="" />
                </div>
            </div>
            
            <div className="paraContainer">
                <div className="HeaderContainer">
                    <div className="header">Services Offered</div>
                </div>
                <div className="ServicesOffered">
                    <div className="web">Web layout, design, build, and trouble shooting</div>
                    <div className="python">Python programing</div>
                    <div className="service3">Updating</div>
                    <div className="service4">Data Storage and retrival</div>
                    <div className="service5">Design and build Apps</div>
                    <div className="service6">Concultation</div>
                </div>   
            </div>

            <div className="languages">
                <div className="headerL">
                    <div className="headCon">Experienced In</div>
                </div>
                <div className="langCon">
                    <div className="html">html/css</div>
                    <div className="re">React</div>
                    <div className="py">Python</div>
                    <div className="javas">JavaScript</div>
                    <div className="MySql">MySql</div>
                    <div className="Git">Github</div>
                    <div className="MangoDB">Mango</div>
                    <div className="frameWork">Frame Work</div>
                    <div className="scss">SCSS</div>
                    <div className="UX">UX/UI</div>
                    <div className="json">JSON</div>
                    <div className="UML">UML Diagrams</div>
                    <div className="JSX">JSX</div>
                </div>  
            </div>
        </div>
            
        
    )
}

export default Services;

