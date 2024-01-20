import { IconBrandAmongUs } from "@tabler/icons-react";
import price from "@/public/images/price_11.jpg";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-t from-blue-900 to-blue-400"
      style={{ background: `url(${price.src})` }}
    >
      <footer className="footer p-10  text-black flex justify-around">
        <aside>
          <IconBrandAmongUs className="w-24 h-24" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="text-black text-lg">Services</header>
          <div className="text-slate-600">Branding</div>
          <div className="text-slate-600">Design</div>
          <div className="text-slate-600">Marketing</div>
          <div className="text-slate-600">Advertisement</div>
        </nav>
        <nav>
          <header className="text-blacktext-lg">Company</header>
          <div className="text-slate-600">About us</div>
          <div className="text-slate-600">Contact</div>
          <div className="text-slate-600">Jobs</div>
          <div className="text-slate-600">Press kit</div>
        </nav>
        <nav>
          <header className="text-black text-lg">Legal</header>
          <div className="text-slate-600">Terms of use</div>
          <div className="text-slate-600">Privacy policy</div>
          <div className="text-slate-600">Cookie policy</div>
        </nav>
      </footer>
      <footer className="footer items-center p-4  text-slate-600 justify-center">
        <aside className="items-center grid-flow-col w-full">
          <div className=" flex ">
            <p>Copyright © 2024 - All right reserved</p>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
