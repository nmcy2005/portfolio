import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <a href="#">Kim Logoshenko</a>
        </div>
        <div className="nav-link">
          <a href="#about">About</a>
          <a href="#hire">Hire me</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
