
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProduct from "./components/TopProducts/TopProduct";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";




function App() {
  useEffect(()=>{
 AOS.init({
  offset:100,
  duration:800,
  easing:"ease-in-sine",
  delay:100
 });
 AOS.refresh();
  },[])


  return (
    <div>
    <Navbar/>
    <Hero/>
    <Product/>
    <TopProduct/>
    <Banner/>
    <Subscribe/>
    <Product/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default App
