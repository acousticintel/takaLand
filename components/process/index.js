import dynamic from "next/dynamic";
//custom packs
const IoHappySharp = dynamic(
  async () => (await import("react-icons/io5")).IoHappySharp
);

export default function Process() {
  return (
    <section id="process" className="process__sec">
      <h5>Features</h5>
      <h2>How It Works</h2>
      <h6>
        Product Tagline Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In fringilla.
      </h6>
      <div className="processes">
        <div className="process">
          <div className="icon">
            <IoHappySharp size="2em" />
          </div>
          <h6>Lorem ipsum dolor sit amet.</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </p>
        </div>
        <div className="process">
          <div className="icon">
            <IoHappySharp size="2em" />
          </div>
          <h6>Lorem ipsum dolor sit amet adipiscing elit.</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </p>
        </div>
        <div className="process">
          <div className="icon">
            <IoHappySharp size="2em" />
          </div>
          <h6>Lorem ipsum dolor elit.</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </p>
        </div>
      </div>
    </section>
  );
}
