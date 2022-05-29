//custom packs
import Image from "next/image";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero min-h-[calc(100vh_-_4rem)] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative h-64 lg:h-96 w-full max-w-sm">
          <Image src="/assets/recycle.webp" className="object-contain" layout="fill" alt="" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-teal-700">
            Documenting Africas climate action.
          </h1>
          <p className="pt-3 pb-6 pl-6 font-medium text-gray-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="services" spy={true} smooth={true}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
