import React from "react";
import "./Projects.css";
import Project1 from './imagess/blackDimond.jpg';
import Project2 from './imagess/owl.jpg';
import Project3 from './imagess/Ecom.jpg';
import Project4 from './imagess/stock.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
      </div>
       <div className="container5">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Portfolio Generator</h5>
                     <h4 className="project__text">Take a look</h4>
                     <a href="#" className="project__btn1">
                         
                            View Details
                         
                         </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Daily Smarty</h5>
                     <h4 className="project__text">Get a glance</h4>
                     <a href="#" className="project__btn1">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ecommerce</h5>
                     <h4 className="project__text">Check it out</h4>
                     <a href="#" className="project__btn1">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Stock Predictions</h5>
                     <h4 className="project__text">Enter at your own risk</h4>
                     <a href="#" className="project__btn1">View Details</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Project;