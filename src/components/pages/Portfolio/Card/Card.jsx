import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card-portfolio">
      <div className="project-img">
        <div className="types">
          <span>{props.type}</span>
        </div>
        <img src={`images/${props.img}`} alt="image" />
      </div>
      <div className="card-info">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
