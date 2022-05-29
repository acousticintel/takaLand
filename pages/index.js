import Hero from '../components/hero';
import Partners from '../components/partners';
import Process from '../components/process';
import Products from '../components/products';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Products/>
      <Process/>
      <Partners/>
    </div>
  )
}
