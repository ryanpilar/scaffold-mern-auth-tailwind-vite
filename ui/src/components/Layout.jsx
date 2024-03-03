import React from "react";
// Project Imports
import Navbar from "./Navbar";

/** ================================|| Layout ||=================================== **/

const Layout = ({ children }) => {
  return (
    <div className="min-h-full min-w-full">
      <Navbar />
      <Hero />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export function Hero() {
  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Beta Board
        </h1>
      </div>
    </div>
  );
}

export default Layout;
