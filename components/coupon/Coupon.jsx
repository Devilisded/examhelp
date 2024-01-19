import logo from "@/public/images/logo.webp";
import Image from "next/image";
const Coupon = () => {
  return (
    <div>
      <div className="container mx-auto pb-12">
        <div className=" flex flex-col md:flex-row bg-gradient-to-tr from-orange-600 to-blue-100  text-white text-center py-10 px-1 rounded-lg shadow-md relative justify-around  items-center p-4">
          <div className="flex flex-col gap-4 border-dotted border-white border py-8 px-8">
            <div className="flex text-5xl font-bold h-full ">20% Flat Off</div>
            <div className="text-xl">On all assignment within the country</div>
          </div>
          <div className="p-4">
            <Image
              src={logo.src}
              className=" mx-auto mb-4 rounded-lg"
              height={250}
              width={250}
              alt="logo"
            />
            <div className="flex items-center space-x-2 mb-6 justify-center">
              <span
                id="cpnCode"
                className="border-dashed border text-white px-4 py-2 rounded-lg"
              >
                STEALDEAL20
              </span>
              <span
                id="cpnBtn"
                className="border border-white bg-slate-100/80 text-slate-700 font-semibold px-4 py-2 rounded-lg cursor-pointer"
              >
                Copy Code
              </span>
            </div>
            <p className="text-sm">Valid Till: 20Dec, 2023</p>
            <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
            <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
