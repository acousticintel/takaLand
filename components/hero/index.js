//custom packs
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div class="hero min-h-[calc(100vh_-_4rem)] bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/assets/recycle.webp" class="max-w-sm" />
        <div className="text-center md:text-left">
          <h1 class="text-4xl font-bold text-teal-700 ">
            Documenting Africa's climate action.
          </h1>
          <p class="pt-3 pb-6 pl-6 font-medium text-gray-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="services" spy={true} smooth={true}>
            <button class="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
