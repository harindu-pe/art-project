import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
