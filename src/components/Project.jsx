import classes from "./Project.module.css";

function Project({ data }) {
  return (
    <div className={classes.card}>
      {data.image && (
        <img src={data.image} alt={data.title} className={classes.image} />
      )}
      <h2>{data.title}</h2>
      <p className={classes.description}>{data.description}</p>
      <p className={classes.techStack}>Tech Stack: {data.techStack}</p>
      <div className={classes.links}>
        <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={data.gitLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
