import logo from "@/public/images/logo.webp";
import Image from "next/image";
const Coupon = () => {
  return (
    <div>
      <div className="container mx-auto pb-12">
        <div className=" bg-gradient-to-r from-orange-600 to-blue-600  text-white text-center py-10 px-20 rounded-lg shadow-md relative">
          <Image
            src={logo.src}
            className=" mx-auto mb-4 rounded-lg"
            height={200}
            width={200}
          />
          <h3 className="text-2xl font-semibold mb-4">
            20% flat off on all assignment within the country
            <br />
            using HDFC Credit Card
          </h3>
          <div className="flex items-center space-x-2 mb-6 justify-center">
            <span
              id="cpnCode"
              className="border-dashed border text-white px-4 py-2 rounded-lg"
            >
              STEALDEAL20
            </span>
            <span
              id="cpnBtn"
              className="border border-white bg-orange-100/80 text-slate-700 font-semibold px-4 py-2 rounded-lg cursor-pointer"
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
  );
};

export default Coupon;
