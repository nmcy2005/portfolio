import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-title">Who am I?</div>
      <div className="about-text">
        <div className="about-picture">
          <img src="../images/hero2.jpeg" alt="profile"></img>
          <div className="about-name">Kim Logoshenko</div>
        </div>

        <div className="about-description">
          I am a high school student, living in Stuttgart, Germany. I started my
          web development journey in the beginning of 2020 and since then
          expanded my knowledge every day. Today I am a fullstack web developer,
          using the MERN stack. My expertise is front end design and
          development, especially React.js and animations with CSS3. As you can
          see I design my websites with a new, up-to-date look. I want to
          provide you with a website that is full of functionality, as well as
          it has a modern looking design, to stay up-to-date for a long time.
        </div>
      </div>
      <div className="icons">
        <i className="fab fa-linkedin fa-2x" onClick={linkedin}></i>
        <i className="fab fa-youtube fa-2x" onClick={youtube}></i>
        <i className="fab fa-instagram fa-2x" onClick={insta}></i>
      </div>
    </div>
  );
}

function insta() {
  window.open("https://www.instagram.com/kimspeedcubing/");
}
function youtube() {
  window.open("https://www.youtube.com/channel/UCEP4wihsN6aJGhC29iCr7YQ");
}
function linkedin() {
  window.open("https://de.linkedin.com/in/kim-logoshenko-1519681a9");
}

export default About;
