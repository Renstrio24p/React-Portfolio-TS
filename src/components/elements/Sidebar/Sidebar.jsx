import { Link } from "react-router-dom";
import { Logo, Profile } from "../images";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="upper">
        <div className="blur s-blur1"></div>
        <div className="logo">
          <img src={Profile} alt="logo" />
        </div>
        <div>
          <h1>Dev Waren</h1>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className="side-list">
        <h2>Overview</h2>
        <ul>
          <li>
            <Link to={"/"}>
              <box-icon
                color={"var(--cyan)"}
                type="solid"
                name="home-circle"
                size="sm"
              ></box-icon>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <box-icon
                color={"var(--cyan)"}
                name="info-circle"
                size="sm"
              ></box-icon>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to={"/services"}>
              <box-icon name="server" color={"var(--cyan)"}></box-icon>
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to={"/portfolio"}>
              <box-icon name="briefcase" color={"var(--cyan)"}></box-icon>
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <box-icon name="phone" color={"var(--cyan)"}></box-icon>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <div className="blur s-blur2"></div>
      </div>
      <div className="s-social">
        <h2>Social Sites</h2>
        <ul>
          <li>
            <box-icon
              type="logo"
              name="github"
              color={"var(--cyan)"}
            ></box-icon>
            <span>Github</span>
          </li>
          <li>
            <box-icon
              type="logo"
              name="facebook"
              color={"var(--cyan)"}
            ></box-icon>
            <span>Facebook</span>
          </li>
          <li>
            <box-icon
              type="logo"
              name="linkedin-square"
              color={"var(--cyan)"}
            ></box-icon>
            <span>LinkedIn</span>
          </li>
          <li>
            <box-icon
              type="logo"
              name="twitter"
              color={"var(--cyan)"}
            ></box-icon>
            <span>Twitter</span>
          </li>
        </ul>
      </div>
      <div className="blur s-blur3"></div>
      <div className="switch">
        <div className="darkmode-toggle">
          <box-icon
            name="sun"
            color={"var(--submarine)"}
            size={"sm"}
          ></box-icon>
          <button className="toggle"></button>
          <box-icon name="moon" color={"var(--cyan)"} size={"sm"}></box-icon>
        </div>
        <p className="copy">&copy;Copyright 2023, by Waren</p>
      </div>
    </aside>
  );
}
