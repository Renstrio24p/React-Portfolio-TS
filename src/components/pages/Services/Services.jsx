import './Services.scss';
import Card from './card/Card';
import { Data } from './card/jsons/servicesData';

const Services = () => {
  const serviceCard = Data.map((item) => (
    <Card key={item.id} {...item} />
  ));

  return (
    <div className="services">
      <div className="s-heading">
        <h2>My Services</h2>
        <p>Here are the awesome services I offer.</p>
      </div>
      <div className="s-content">{serviceCard}</div>
    </div>
  );
};

export default Services;
