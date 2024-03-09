import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero title="Testing Dynamic Title for the service hero" />
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <div className="py-10">
        <h1 className="text-4xl text-center font-semibold mb-10">
          Our Experts
        </h1>
        <ExpertCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="w-full cbg ">
        <div className="w-full">
          <div className="z-50 text-center mx-auto max-w-[510px]">
            <h2 className=" font-bold  text-3xl sm:text-4xl  md:text-[40px]  text-white z-50 ">
              Testimonials
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel />
        </div>
      </div>
      {/* <div className="flex justify-center h-[80vh] p-10">
        <div className="w-[80%] flex gap-5">
          <div className="flex flex-col gap-5">
            <div className="h-full px-5 py-10 flex flex-col gap-10 bg-blue-100 rounded-xl">
              <h1 className="text-7xl font-semibold">
                New goals require new knowledge
              </h1>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                nam dolorum maxime rem quasi quos dolorem, sequi, veniam ea
                voluptates explicabo error iusto distinctio nisi, dignissimos
                pariatur at sint nesciunt? Sequi, et.
              </div>
            </div>
            <div className="h-1/3 flex gap-5">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="p-10 flex justify-center items-center bg-orange-400/90 rounded-xl text-white">
                <IconArrowDownRight className="w-40 h-40" />
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-1/3 object-cover rounded-xl"
          />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Aboutus;
