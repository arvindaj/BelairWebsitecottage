import mainlogo from "../assets/images/footer/mainlogo1.png";
import navicon1 from "../assets/images/footer/mail.png";
import navicon2 from "../assets/images/footer/whatsapp.png";
import navicon3 from "../assets/images/footer/insta.png";
import navicon4 from "../assets/images/footer/linkedin.png";
import navicon5 from "../assets/images/footer/insta.png";
import leaf1 from "../assets/images/footer/Vector.png";
import leaf2 from "../assets/images/footer/Vector (1).png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-gray-300 py-10 md:py-14 font-sans relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-gray-700 pb-10">
          <img
            src={leaf1}
            alt="Leaf"
            className="hidden lg:block absolute  right-40 bottom-22 w-20 md:w-32 opacity-70"
          />
          <img
            src={leaf2}
            alt="Leaf"
            className="hidden lg:block absolute  right-0 bottom-12 w-20 md:w-32 opacity-70 rotate-0"
          />

          <div className="relative z-10">
            <h3 className="uppercase tracking-widest text-sm md:text-base text-white font-light mb-2">
              Your monthly guide to travel BelAir <br />
              Cottages and Kotagiri
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Join our newsletter for exclusive promotions, updates, and travel
              inspiration.
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:items-end">
            <h3 className="text-white text-lg font-serif mb-3">
              The Belair Cottages Newsletter
            </h3>
            <form className="flex flex-col lg:flex-row w-full md:w-[80%]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 p-2 md:p-3 rounded-none text-gray-800 focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="px-5 md:px-7 py-2 md:py-3 bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10 py-10 border-b border-gray-700">
          <div className="space-y-4 flex flex-col justify-center md:justify-start">
            <div className="flex justify-center md:justify-start">
              <img
                src={mainlogo}
                alt="BelAir Cottages"
                className="w-30 md:h-12"
              />
            </div>

            <div className="flex justify-center flex-wrap gap-4 text-xs mt-5 text-gray-400 md:justify-start">
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white">
                Privacy Notice
              </a>
              <a href="#" className="hover:text-white">
                Accessibility
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-5">
            <a href="mailto:info@belair.com">
              <img
                src={navicon1}
                alt="mail"
                className="w-5 h-5 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={navicon2}
                alt="whatsapp"
                className="w-5 h-5 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={navicon3}
                alt="instagram"
                className="w-5 h-5 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={navicon4}
                alt="linkedin"
                className="w-5 h-5 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={navicon5}
                alt="instagram"
                className="w-5 h-5 hover:opacity-80"
              />
            </a>
          </div>

          <div className="flex justify-center md:justify-end space-x-10 text-sm">
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-white">
                  Rooms
                </Link>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8 tracking-wide">
          2024 © BELAIR COTTAGES LIMITED. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
