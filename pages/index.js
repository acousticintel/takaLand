import Contact from '../components/contact';
import Hero from '../components/hero';
import Process from '../components/process';
import Products from '../components/products';

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
