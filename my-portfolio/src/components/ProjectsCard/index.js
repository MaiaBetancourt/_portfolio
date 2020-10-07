import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <a href={props.gitUrl}>
            <strong>Github Url:</strong> {props.gitUrl}
          </a>
          <li>
            <strong>Deployed Url:</strong> {props.deployedUrl}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
