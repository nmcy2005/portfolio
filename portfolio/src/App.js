import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Hire from "./components/Hire";

class App extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    alert("Ouch");
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Project
          title="Trip Advisor"
          desc="Trip Advisor is an app designed and developed by me. It should help finding an airport in a given area for you and also give you information about the current weather there."
          classname="project1"
          id="1"
          url="https://tripadvisor-project.imfast.io/"
        />
        <Project
          title="Ferienwohnung Burgblick"
          desc="I developed the website and the online booking web application for a German family. There you can see when the house is already booked and book a visit yourself"
          classname="project2"
          id="2"
        />
        <Project
          title="Trip Advisor"
          desc="description"
          classname="project3"
          id="3"
        />
        <About />
        <Hire />
        <img src="images/project1.jpg" alt="hello"></img>
      </div>
    );
  }
}

export default App;
