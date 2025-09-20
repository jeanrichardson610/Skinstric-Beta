import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Nav2 from "./Nav2";

function Layout({ children }) {
  const location = useLocation();

  // Decide which Nav to show
  const useNav2 =
    location.pathname === "/results" || location.pathname === "/demographics";

  return (
    <>
      {useNav2 ? <Nav2 /> : <Nav />}
      {children}
    </>
  );
}

export default Layout;
