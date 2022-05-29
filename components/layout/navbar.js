import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg grid place-content-center">
      <div className="flex items-center">
        <a className="btn btn-lg btn-ghost gap-2 text-5xl font-bold uppercase text-teal-700">
        <div className="relative h-10 w-5">
          <Image
            src="/assets/logo.png"
            layout="fill"
            className="object-contain"
            alt=""
          />
        </div>
          Taka
        </a>
      </div>
    </div>
  );
}
