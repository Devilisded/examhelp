import About from "@/components/about/About";
import Feature from "@/components/features/Feature";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Carousel from "@/components/carousel/Carousel";
import Number from "@/components/number/Number";
import FAQ from "@/components/faq/FAQ";
import Trusted from "@/components/trusted/Trusted";
export default function Home() {
  const OPTIONS = {};
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Number />
      <div className="w-full cbg">
        <div className="w-full">
          <div className="z-50 text-center mx-auto max-w-[510px]">
            <h2 className=" font-bold  text-3xl sm:text-4xl  md:text-[40px]  text-white z-50 ">
              Testimonials
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel options={OPTIONS} />
        </div>
      </div>
      <Trusted />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
}
