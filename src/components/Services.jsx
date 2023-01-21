import Service from "./Service";
import Title from "./Title";
import { services } from "../data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.icon} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
