import Head from "next/head";
import Image from "next/image";
//custom
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, path }) {
  return (
    <>
      <Head>
        <title>Taka. Earn as you throw waste.</title>
      </Head>
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
