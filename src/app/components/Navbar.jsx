import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <img className="w-10" src="/logo.png" alt="" />
        <h2 className="text-xl font-medium">WhatBytes</h2>
      </div>

      <div className="flex flex-col  items-center justify-center lg:flex-row lg:border-2 lg:rounded-md lg:justify-start">
        <div className="flex justify-center items-center lg:w-9 lg:h-9 lg:bg-[url('/blob2.svg')] lg:bg-cover">
          <img
            className="w-10 rounded-full aspect-square object-cover lg:w-5"
            src="/profile.avif"
            alt=""
          />
        </div>
        <h3 className="px-1 font-semibold lg:text-sm">Rahil Siddique</h3>
      </div>
    </nav>
  );
};

export default Navbar;
