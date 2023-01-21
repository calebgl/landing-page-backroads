import Title from "./Title";
import Tour from "./Tour";
import { tours } from "../data";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.title} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
