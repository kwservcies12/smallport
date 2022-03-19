import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import Login from "./login.js";
import ProjectDetails from "./projectDetails.js";
import Signup from "./signup";






function App() {
  return(
    <div className="App" >  

      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/loginForm" component={LoginForm} />
      <Route exact path="/projectDetails" component={ProjectDetails} />
      <Route exact path="/signup" component={Signup} />

    </div>
  );
}

export default App;