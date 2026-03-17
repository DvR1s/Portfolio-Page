import classes from "./AboutMe.module.css";
import selfImage from "../resources/images/selfImage.JPG";

function AboutMe() {
  return (
    <div className={classes.pagefront}>
      <div className={classes.imagebox}>
        <img src={selfImage} alt="Dmitrijs Risniks" />
      </div>

      <div className={classes.aboutme}>
        <h2>Hi, I'm Dmitrijs Risniks</h2>
        <h3 className={classes.subtitle}>Junior React Developer</h3>

        <p>
          I’m a junior React developer with a strong foundation in modern web
          development. Through extensive hands-on training I built several
          applications using React, including full-stack projects with Next.js.
          During this process I gained practical experience working with React
          components, hooks, routing, API integration and state management.
        </p>

        <p>
          I’m still early in my developer journey and understand that there is
          always more to learn. I enjoy solving problems, experimenting with new
          technologies and continuously improving my skills by building real
          projects.
        </p>

        <p className={classes.tech}>
          <strong>Technologies:</strong> React • Next.js • React Router •
          JavaScript (ES6+) • REST APIs • CSS Modules
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
