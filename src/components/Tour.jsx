import { Icon } from "@iconify/react";

function Tour(props) {
  const { tour } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tour.image} className="tour-img" alt={tour.title} />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tour.title}</h4>
        </div>
        <p>{tour.text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <Icon icon="material-symbols:my-location-rounded" />
            </span>{" "}
            {tour.location}
          </p>
          <p>{tour.duration} days</p>
          <p>from ${tour.cost}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
