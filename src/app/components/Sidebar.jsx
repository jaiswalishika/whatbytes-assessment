"use client";
import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TfiMedall } from "react-icons/tfi";
import { IoDocumentOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 lg:p-0 lg:h-auto lg:w-[18vw] xl:w-[20vw] ">
      <button className="lg:hidden bg-slate-100 shadow-md rounded-full p-2 lg:shadow-none lg:rounded-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoIosClose size={24}/> : <CiMenuKebab size={24} />}
      </button>
      <div className="relative h-full w-full ">
      <div className={`flex transition-all duration-300 ease-in-out absolute ${isOpen ? "h-auto  top-0 bg-white" : "h-0"} lg:h-full
        lg:w-full `}>
        <aside
          className={` w-64 border rounded-md shadow-xl transition-all duration-300 ease-in-out  ${
            isOpen ? "block" : "hidden"
          } lg:block lg:rounded-none lg:shadow-none lg:border-t-0 lg:border-r`}
        >
          <nav className="mt-8 space-y-2 lg:space-y-4 lg:p-3">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full"
            >
              <MdOutlineBarChart size={20} />
              <span className="ml-3 font-semibold">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full"
            >
              <TfiMedall size={20} />
              <span className="ml-3 font-semibold">Skill Test</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full" 
            >
              <IoDocumentOutline size={20} />
              <span className="ml-3 font-semibold">Internship</span>
            </a>
          </nav>
        </aside>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
