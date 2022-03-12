import React from 'react'
import "./Home.css"
function Home() {
    return(
        <div className="bodyContainer">
            <div className="pic1Container">
                <div className="pic1">
                    <img src="/images/greyTieOffice.jpg" alt="" />
                    <h1>Welcome to my site</h1>
                </div>
            </div>
            
            
            
        <div className="home__meta">
            <h2 className="home__text pz__10">Hey, I’m Kane</h2>
            <h3 className="home__text sweet pz__10">Full Stack Web Developer.</h3>
            <h4 className="home__text quote pz__12">Create. Not for the money. Not for the fame. Not for the recognition. But for the pure joy of creating something and sharing it.” 
            ― Ernest Barbaric</h4>
        </div>
        </div>
            
       
    );
}

export default Home;