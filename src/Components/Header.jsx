import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
/* eslint-disable react/prop-types */

function Header({ Logged }) {
  return (
    <div className="flex justify-around px-6 py-2 fixed top-0 left-0 h-[80px] w-full z-50 bg-black">
      <div className="w-full max-h-20 flex  justify-between items-center">
        <NavLink to="/" className="hover:text-white">
          <Logo />
        </NavLink>
        <Nav />
      </div>
      <div className="text-nowrap px-4 flex items-center">
        <NavLink
          to={"/signup"}
          className="cursor-pointer hover:bg-[#f0dca6] hover:text-black hover:font-bold px-2 py-1 rounded-lg ease-in-out"
        >
          Sign Up
        </NavLink>
        <pre> / </pre>
        {!Logged ? (
          <NavLink
            to={"/login"}
            className="cursor-pointer bg-[#f0dca6] text-black hover:bg-transparent hover:text-white hover:font-bold px-2 py-1 rounded-lg ease-in-out"
          >
            Log In
          </NavLink>
        ) : (
          <NavLink
            to={"/"}
            className="cursor-pointer hover:bg-[#f0dca6] hover:text-black bg-transparent text-white hover:font-bold px-2 py-1 rounded-lg ease-in-out"
            onClick={() => {
              localStorage.removeItem("userId");
            }}
          >
            Log Out
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
