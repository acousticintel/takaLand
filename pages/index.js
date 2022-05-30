const Contact = dynamic(() => import("../components/contact"));
const Hero = dynamic(() => import("../components/hero"));
const Process = dynamic(() => import("../components/process"));
const Products = dynamic(() => import("../components/products"));

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Products/>
      <Process/>
      <Contact/>
    </div>
  )
}
