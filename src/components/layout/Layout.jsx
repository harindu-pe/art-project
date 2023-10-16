import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
