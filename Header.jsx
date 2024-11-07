import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getCartList } from "../utils/addToCart";
import { getFavList } from "../utils/addToFav";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isStatistics = location.pathname === "/statistics";
  const isDashboard = location.pathname === "/dashboard";
  const isLatest = location.pathname === "/whatsNew";

  const inCart = getCartList();
  const cartLength = inCart.length;

  const inFav = getFavList();
  const favLength = inFav.length;

  const handleCartClick = () => {
    navigate("/dashboard");
  };

  const handleFavClick = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className={`navbar container mx-auto items-center justify-center ${
        isHome ? "bg-[#9538E2] mt-4 rounded-t-3xl shadow-lg" : "bg-base-100"
      } transition-all duration-300`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800 hover:text-[#9538E2] transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg transition-shadow duration-300"
          >
            <li>
              <NavLink
                to="/"
                className={`text-lg ${isHome ? "underline" : ""} hover:text-[#9538E2] transition-colors duration-200`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={`text-lg ${isStatistics ? "underline" : ""} hover:text-[#9538E2] transition-colors duration-200`}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={`text-lg ${isDashboard ? "underline" : ""} hover:text-[#9538E2] transition-colors duration-200`}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whatsNew"
                className={`text-lg ${isLatest ? "underline" : ""} hover:text-[#9538E2] transition-colors duration-200`}
              >
                What's New?
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl   text-green-500 font-bold hover:scale-105 transition-transform duration-200">
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/" className={`text-lg font-bold ${isHome ? "" : ""} hover:text-[#9538E2] transition-colors duration-200`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={`text-lg font-bold ${isStatistics ? "" : ""} hover:text-[#9538E2] transition-colors duration-200`}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={`text-lg font-bold ${isDashboard ? "" : ""} hover:text-[#9538E2] transition-colors duration-200`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whatsNew"
              className={`text-lg font-bold ${isLatest ? "" : ""} hover:text-[#9538E2] transition-colors duration-200`}
            >
              Additional-Product's
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="relative">
          <button onClick={handleCartClick} className="btn btn-circle bg-white hover:shadow-lg transition-shadow duration-200">
            <img className="w-3/5" src="/cart.png" alt="Cart Icon" />
          </button>
          <h1 className="absolute bottom-8 left-8 text-red-900 font-bold bg-yellow-300 rounded-full px-2">
            {cartLength !== 0 ? cartLength : ""}
          </h1>
        </div>
        <div className="relative">
          <button onClick={handleFavClick} className="btn btn-circle bg-white hover:shadow-lg transition-shadow duration-200">
            <img className="w-3/5" src="/heart.png" alt="Heart Icon" />
          </button>
          <h1 className="absolute bottom-8 left-8 text-red-900 font-bold bg-yellow-300 rounded-full px-2">
            {favLength !== 0 ? favLength : ""}
          </h1>
        </div>
      </div>
    </div>
  );
  
};

export default Header;
