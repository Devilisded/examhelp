import About from "@/components/about/About";
import Coupon from "@/components/coupon/Coupon";
import Feature from "@/components/features/Feature";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Carousel from "@/components/carousel/Carousel";
import MainTitle from "@/components/mainTitle/MainTitle";
import Number from "@/components/number/Number";
import FAQ from "@/components/faq/FAQ";
export default function Home() {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Number />
      <div className="w-full flex justify-center cbg">
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
}
