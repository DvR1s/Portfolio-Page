import classes from "./AboutMe.module.css";
import selfImage from "../resources/images/selfImage.JPG";

function AboutMe() {
  return (
    <div className={classes.pagefront}>
      <div className={classes.card}>
        <img
          src={selfImage}
          alt="Dmitrijs Risniks"
          className={classes.image}
        />
        <h2>Hi, I'm Dmitrijs Risniks</h2>
        <h3 className={classes.subtitle}>Junior React Developer</h3>
        <p>
          I’m a junior React developer with hands-on experience building
          applications with React and Next.js. I enjoy solving problems,
          learning new technologies, and improving my skills by building real
          projects.
        </p>
        <p className={classes.tech}>
          <strong>Technologies:</strong> React • Next.js • React Router •
          JavaScript • REST APIs • CSS Modules
        </p>
      </div>
    </div>
  );
}

export default AboutMe;