import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
//custom
const Navbar = dynamic(() => import("./navbar"));
const Footer = dynamic(() => import("./footer"));


export default function Layout({ children, path }) {
  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);
  return (
    <>
      <Navbar />
      <main className="page-content">{children}</main>
      <div className="relative w-full h-52">
        <Image
          src="/assets/neutral.png"
          layout="fill"
          className="object-contain"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
}
