import React from "react";
import "./style.scss";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
const projects = [
  {
    id: 1,
    name: "Aplikacja mobilna mbank",
    activeTasks: 26,
    progressBar: 76,
    typeOfProject: "Aplikacja",
    endDate: "26.01.2022",
  },
  {
    id: 2,
    name: "Aplikacja mobilna mbank",
    activeTasks: 26,
    progressBar: 76,
    typeOfProject: "Aplikacja",
    endDate: "26.01.2022",
  },
  {
    id: 3,
    name: "Aplikacja mobilna mbank",
    activeTasks: 26,
    progressBar: 76,
    typeOfProject: "Aplikacja",
    endDate: "26.01.2022",
  },
  {
    id: 4,
    name: "Aplikacja mobilna mbank",
    activeTasks: 26,
    progressBar: 76,
    typeOfProject: "Aplikacja",
    endDate: "26.01.2022",
  },
];
function ProjectTileList() {
  return (
    <div>
      {projects.map((item) => (
        <ProjectTile key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProjectTileList;
