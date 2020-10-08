import React from "react";
import ContactLinks from "../components/ContactLinks";

function About() {
  return (
    <div>
      <div
        className="hero text-center"
        style={{
          height: "50vh",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/DevImage.jpeg"})`,
        }}
      ></div>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col col-md-12">
            <h1>Hello!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6">
            <p>
              My name is Maria. I recently received a certificate in Full
              Stack Web Development from University of Arizona Coding Bootcamp.
              During the course, I learned to develop projects in groups,
              delegate tasks, and meet deadlines. I acquired skills in both
              front and back-end technologies, learned languages like HTML, CSS,
              and JavaScript, frameworks like React and Express, and databases
              like MySQL and MongoDB.
            </p>
            <p>
              In the past I've worked managing digital presses which highly
              developed my critical thinking skills and attention to detail.
              I've provided links tol some of my projects and also contact
              information should there be any questions.
            </p>
          </div>
          <div className="col col-md-6">
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
