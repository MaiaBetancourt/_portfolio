import React, { Component } from "react";
import ProjectsCard from "../components/ProjectsCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../project.json";

export default class Portfolio extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <Wrapper>
        <Title>Projects List</Title>
        {this.state.projects.map((project) => (
          <ProjectsCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            gitUrl={project.gitUrl}
            deployedUrl={project.deployedUrl}
          />
        ))}
      </Wrapper>
    );
  }
}
