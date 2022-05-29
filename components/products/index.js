import dynamic from "next/dynamic";
//custom packs
import { Link } from "react-scroll";
const FaCheckCircle = dynamic(
  async () => (await import("react-icons/fa")).FaCheckCircle
);

export default function Products() {
  const prods = [
    {
      title: "Events",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Incentivize event attendees to recycle their waste",
        "Offering cashbacks or discounts on future purchases",
        "Monitor their waste profile ",
      ],
    },
    {
      title: "Corporates",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Measure their sustainability effort",
        "Document their sustainability impact",
        "Report on their sustainability ",
      ],
    },
    {
      title: "Home",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Incentivize the public to recycle",
        "Divert their waste from landfills ",
        "Create a loyalty program for future sales",
      ],
    },
  ];
  return (
    <section id="services" className="products__sec">
      <h5>Services</h5>
      <h2>Products</h2>
      <h6>
        Services Tagline Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. In fringilla.
      </h6>
      <div className="products">
        {prods.map((pr, i) => (
          <div className="product" key={i}>
            <h3>{pr.title}</h3>
            <p>We provide companies a platform to: </p>
            <ul>
              {pr.points.map((p, i) => (
                <li key={i}>
                  <FaCheckCircle size=".9em" /> <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="process" spy={true} smooth={true}>
              <div className="button__sec">
                <button className="btn-accent">More Info</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
