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




function App() {
  return(
    <div className="App" >
      <NavBar />
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/services" component={Services} />
    </div>
  );
}

export default App;