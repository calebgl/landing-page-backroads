import { Icon } from "@iconify/react";

function Service(props) {
  const { service } = props;
  return (
    <article className="service">
      <span className="service-icon">
        <Icon icon={service.icon} />
      </span>
      <div className="service-info">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-text">{service.text}</p>
      </div>
    </article>
  );
}

export default Service;
