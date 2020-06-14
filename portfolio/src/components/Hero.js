import React, { Component } from "react";

class Hero extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    let project1 = document.querySelector(".project1");
    project1.classList.add("p1");
    let project2 = document.querySelector(".project2");
    project2.classList.add("p2");
    let project3 = document.querySelector(".project3");
    project3.classList.add("p3");
  }

  render() {
    return (
      <div className="hero" id="hero">
        <img src="../images/hero_image.jpeg" alt="hero"></img>
        <div className="banner">
          So you need
          <br />a website.
        </div>
        <div className="hero-link">
          Watch <span onClick={this.handleOnClick}>this</span>!
        </div>
      </div>
    );
  }
}

export default Hero;
