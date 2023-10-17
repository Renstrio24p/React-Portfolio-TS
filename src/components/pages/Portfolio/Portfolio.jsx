import { TypeScript } from "../../elements/images";
import Card from "./Card/Card";
import { PortData } from "./Card/data/ProjectsData";
import "./Portfolio.scss";

export default function Portfolio() {
  const filteredPortData = PortData.filter((item) => item.type !== "webpack");
  const TemplatePortData = PortData.filter((item) => item.type === "webpack");

  const sortedPortData = filteredPortData
    .slice()
    .sort((a, b) => a.type.localeCompare(b.type));

  const card = sortedPortData.map((item, i) => <Card key={i} {...item} />);

  const card2 = TemplatePortData.map((item, i) => <Card key={i} {...item} />);

  return (
    <div className="portfolio">
      <div className="p-heading">
        <div className="p-head-portfolio">
          <h2>Project</h2>
          <p>My Projects</p>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ullam
          nisi eaque illum tempora veritatis itaque enim labore, nostrum dicta
          soluta consequuntur dignissimos suscipit qui!
        </p>
      </div>
      <div className="p-projects">
        <div className="grid">{card}</div>
        <div className="p-head-portfolio">
          <h2>Templates</h2>
          <p>My Templates</p>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ullam
          nisi eaque illum tempora veritatis itaque enim labore, nostrum dicta
          soluta consequuntur dignissimos suscipit qui!
        </p>
        <div className="grid">{card2}</div>
      </div>
    </div>
  );
}
