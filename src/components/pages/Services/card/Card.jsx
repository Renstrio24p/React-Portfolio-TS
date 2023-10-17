import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card-content">
      <div className="c-icon">
        <box-icon
          type="solid"
          name={props.name}
          color={"var(--cyan)"}
          size={'md'}
        ></box-icon>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}
