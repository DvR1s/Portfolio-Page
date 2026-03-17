import Project from "../components/Project";
import classes from "./Projects.module.css";
import {PROJECTS} from '../data/projects' 

function Projects() {
  return (
    <div className={classes.main}>
      <div className={classes.maintext}>
        <h1>My Latest Projects</h1>
        <p>Here you can explore some of the projects I've built recently.</p>
      </div>
      <div className={classes.projectsContainer}>
        {PROJECTS.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
