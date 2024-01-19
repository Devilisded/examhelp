import About from "@/components/about/About";
import Coupon from "@/components/coupon/Coupon";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing/Pricing";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Coupon />
      <Footer />
    </div>
  );
}
