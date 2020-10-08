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
              My name is Maria Betancourt and I am entirely new to the use of
              computers let alone coding. I was born in Acapulco, Mexico and I
              moved to Las Vegas when i was ten years old. I love the outdoors
              like camping, hiking, reading, and going on long drives. I am
              excited to see how much I will learn taking this course.
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
