import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import mainlogo from "../assets/images/navbar/mainlogo.png";
import navicon1 from "../assets/images/navbar/mail.png";
import navicon2 from "../assets/images/navbar/fb.png";
import navicon3 from "../assets/images/navbar/linkedin.png";
import navicon4 from "../assets/images/navbar/insta.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "ROOMS", path: "/rooms" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 pt-3">
      <div className="flex items-center justify-between px-4 md:px-12 py-3 border-b border-gray-300  relative">
        {/* <div className="absolute bottom-0 left-1 transform -translate-x-1/2 w-[90%] md:w-[80%] border-b border-gray-400"></div> */}

        <div className="flex items-center space-x-3">
          <a href="mailto:info@belair.com">
            <img
              src={navicon1}
              alt="mail"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a href="#">
            <img
              src={navicon2}
              alt="facebook"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a href="#">
            <img
              src={navicon3}
              alt="linkedin"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a href="#">
            <img
              src={navicon4}
              alt="instagram"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={mainlogo}
            alt="BelAir Cottages"
            className="h-10 md:h-15 mx-auto"
          />
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex items-center text-sm text-gray-800">
            <FiPhone className="mr-2 text-gray-600 text-[17px]" />
            (987) 654-3210
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 text-2xl ml-3"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ease-in-out bg-white overflow-hidden md:overflow-visible ${
          open ? "max-h-64 border-b" : "max-h-0 md:max-h-none"
        }`}
      >
        <ul className="flex flex-col md:flex-row justify-center items-center font-gfs text-sm font-normal text-gray-700">
          {navLinks.map((link, i) => (
            <li key={i} className="flex items-center py-2 md:py-3 font-serif">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#a3248e]" : "hover:text-[#a3248e]"
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>

              {i !== navLinks.length - 1 && (
                <span className="hidden md:inline-block text-[#a3248e] text-xs mx-6">
                  ◆
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
