import React from 'react';
import "./projectDetails.css";

function ProjectDetails() {
    return(
        <div className="hub">
            <div className="hubContainer">
                <div className="portGen">
                <a href="https://github.com/kwservcies12/smallport" className="Port">Portfolio Generator</a>                   
                </div>

                <div className="Daily Smarty">
                    <a href="https://github.com/kwservcies12/DailySmartyUI" className="Daily Smarty">Daily Smarty</a>                  
                </div>

                <div className="Ecommerce">
                    <a href="https://github.com/kwservcies12/eCommerce_Project" className="Ecommerce">Ecommerce</a>    
                </div>

                <div className="Stocks">
                    <a href="https://github.com/kwservcies12/Stocks.git" className="Stocks">Stocks</a>    
                </div>

            </div>
        </div>
    )
};

export default ProjectDetails;