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
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
    {
      title: "Corps",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
    {
      title: "Home",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
  ];
  return (
    <section id="services" className="products__sec">
      <h5>Services</h5>
      <h2>Products</h2>
      <h6>
        Services Tagline Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In fringilla.
      </h6>
      <div className="products">
        {prods.map((pr, i) => (
          <div className="product" key={i}>
            <h3>{pr.title}</h3>
            <p>{pr.tag}</p>
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
