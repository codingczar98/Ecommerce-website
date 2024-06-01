import React from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartlength }) => {
  const user = localStorage.getItem("user");

  const Logout = () => {
    localStorage.removeItem("user");
    alert("logout successfully");
    useNavigate("/");
  };
  return (
    <div>
      <header className="text-stone-200 body-font px-5 bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_nEpxZElGCzgCnYDNe-cOu1INBwV4Y_LEK9J0kHyrHeQg4=s900-c-k-c0x00ffffff-no-rj"
              alt="logo"
              className="w-10 h-10 mr-1 rounded-full"
            />
            <span className="ml-3 text-xl text-stone-300">
              Fashion Flair
            </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5 hover:text-stone-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 hover:text-stone-200"
            >
              About
            </NavLink>
            <NavLink
              to="/blogs"
              className="mr-5 hover:text-stone-200"
            >
              Blog
            </NavLink>
            <NavLink
              to="/login"
              className="mr-5 hover:text-stone-200"
            >
              Login
            </NavLink>
            {user ? (
              <button
                onClick={Logout} to="/login"
                className="mr-5 hover:text-stone-200"
              >
                Logout
              </button>
            ) : 
              ""
            }
          </nav>
          <Link to={"/cart"}>
            <button className=" relative inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-white mt-4 md:mt-0">
              <FaShoppingCart
                style={{ fontSize: "28px" }}
              />
              <span className="inline-flex items-center rounded-xl bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 absolute -top-2 -right-0">
                {cartlength}
              </span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
