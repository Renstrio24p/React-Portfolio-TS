import { MySQL, Webpack } from "../../elements/images";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skills-div">
      <div className="a-head-skill">
        <h2>Skills</h2>
        <p>My Skills</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque{" "}
        <br />
        tempore a dolor quod ut, laborum eum impedit tempora nostrum deserunt{" "}
        <br />
        et at sequi odit, molestiae magni eligendi in! Incidunt, maiores.
      </p>
      <div className="s-skillset">
        <h3>Front-End</h3>
        <div>
          <ul className="skills">
            <li>
              <box-icon
                type="logo"
                name="react"
                color={"var(--typescript)"}
                size={"md"}
              ></box-icon>
              <p>React 18</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="typescript"
                color={"var(--typescript)"}
                size={"md"}
              ></box-icon>
              <p>TypeScript</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="javascript"
                color={"var(--yellow)"}
                size={"md"}
              ></box-icon>
              <p>JavaScript</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="html5"
                color={"var(--redorange)"}
                size={"md"}
              ></box-icon>
              <p>HTML 5</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="sass"
                color={"var(--pinkish)"}
                size={"md"}
              ></box-icon>
              <p>Sass</p>
            </li>
            <li>
              <div className="img">
                <img src={Webpack} alt="webpack" />
              </div>
              <p>Webpack 5</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="bootstrap"
                color={"var(--lightviolet)"}
                size={"md"}
              ></box-icon>
              <p>Bootstrap 5</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="figma"
                color={"var(--white)"}
                size={"md"}
              ></box-icon>
              <p>Figma</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="css3"
                color={"var(--typescript)"}
                size={"md"}
              ></box-icon>
              <p>CSS 3</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="angular"
                color={"var(--darkcheese)"}
                size={"md"}
              ></box-icon>
              <p>Angular JS</p>
            </li>
            <li>
              <box-icon
                type="solid"
                name="map"
                color={"var(--typescript)"}
                size={"md"}
              ></box-icon>
              <p>MapboxGL</p>
            </li>
            <li>
              <box-icon
                type="solid"
                name="cloud-rain"
                color={"var(--typescript)"}
                size={"md"}
              ></box-icon>
              <p>OpenWeather</p>
            </li>
          </ul>
        </div>
        <h3>Back-End</h3>
        <div>
          <ul className="skills">
            <li>
              <box-icon
                type="logo"
                name="mongodb"
                color={"green"}
                size={"md"}
              ></box-icon>
              <p>MongoDB</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="firebase"
                color={"var(--darkcheese)"}
                size={"md"}
              ></box-icon>
              <p>Firebase</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="nodejs"
                color={"green"}
                size={"md"}
              ></box-icon>
              <p>NodeJS</p>
            </li>
            <li>
              <box-icon
                type="logo"
                name="postgresql"
                color={"gray"}
                size={"md"}
              ></box-icon>
              <p>PostgreSQL</p>
            </li>
            <li>
              <box-icon
                type="solid"
                name="data"
                color={"red"}
                size={"md"}
              ></box-icon>
              <p>Oracle 11g</p>
            </li>
            <li>
            <div className="img">
                <img src={MySQL} alt="mysql" />
              </div>
              <p>MySQL</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
