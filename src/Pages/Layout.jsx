import React from "react";
import  Footer from "../Components/Footer";
import  Navbar  from "../Components/Navbar";
import { Outlet } from "react-router-dom";
export const Layout = ({cartlength}) => {
  return (
    <div>
    <Navbar cartlength={cartlength}/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
