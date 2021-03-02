import React from "react";
import "./style.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function ProjectTile(props) {
  const { name, activeTasks, progressBar, typeOfProject, endDate } = props;
  return (
    <section>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            backgroundColor: "#292929",
          })}
          background
          backgroundPadding={3}
          value={progressBar}
          text={`${progressBar}%`}
        />
      </div>
      <h3>{name}</h3>
      <div>
        <p>Aktywne zadania</p>
        <h4>{activeTasks}</h4>
      </div>
      <div>
        <p>Typ projektu</p>
        <h4>{typeOfProject}</h4>
      </div>
      <div>
        <p>Deadline</p>
        <h4>{endDate}</h4>
      </div>
      <div>
        <button>Rozwiń &#10095;</button>
      </div>
    </section>
  );
}

export default ProjectTile;
