import React from "react";

function Project({ title, desc, classname, id, url }) {
  const projects = ["project1", "project2", "project3"];
  const urls = ["https://tripadvisor-project.imfast.io/", "", ""];

  return (
    <div className={classname}>
      <div className="project-title">{title}</div>
      <div className="project-subtitle">
        <div className="project-image">
          <img
            src={require(`../images/${projects[id - 1]}.jpg`)}
            alt={title}
          ></img>
        </div>
        <div className="project-desc">
          {desc}
          <div className="project-icon">
            <i
              className="far fa-paper-plane"
              onClick={() => openSite(`${urls[id - 1]}`)}
            ></i>
            <i className="fas fa-times" onClick={() => handleToggle()}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function openSite(url) {
  window.open(url);
}

function handleToggle() {
  let project1 = document.querySelector(".project1");
  project1.classList.remove("p1");
  let project2 = document.querySelector(".project2");
  project2.classList.remove("p2");
  let project3 = document.querySelector(".project3");
  project3.classList.remove("p3");
}

export default Project;
