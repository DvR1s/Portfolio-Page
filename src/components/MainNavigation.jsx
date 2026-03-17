import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Dmitrijs Risniks</div>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : classes.notactive
              }
              end
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : classes.notactive
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <a
              href="mailto:dmitrijs.risniks@hotmail.com"
              className={classes.contactButton}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
