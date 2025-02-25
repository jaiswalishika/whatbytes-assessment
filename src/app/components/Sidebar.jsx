import React, { useState } from 'react';

//sidebar component
const Sidebar = () => {
  // State to keep track of the currently active item
  const [activeItem, setActiveItem] = useState('skill-test');

  // Function to handle item click and set the active item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='sidebar-container border-r-[1px] border-customBorder min-h-full 
      xs:w-12 xs:hover:w-40 sm:w-12 sm:hover:w-40 md:w-40 lg:w-60 lg:hover:w-60 
      overflow-x-hidden transition-all duration-300 ease-in-out'>
      
      <div className='sidebar flex flex-col gap-2 font-medium text-[16px] pr-4'>
        <div
          className={`flex items-center gap-5 pl-6 pt-6 pb-6 cursor-pointer ${
            activeItem === 'dashboard' ? 'bg-customHover text-blue-600 rounded-tr-[4rem] rounded-br-[4rem]' : 'hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem]'
          }`}
          onClick={() => handleItemClick('dashboard')}
        >
          <i className="fa-solid fa-chart-simple"></i>
          <p className='whitespace-nowrap'>Dashboard</p>
        </div>
        {/* whitespace-nowrap--> to prevent wrapping in x axis */}
        <div
          className={`flex items-center gap-5 pl-6 pt-6 pb-6 cursor-pointer ${
            activeItem === 'skill-test' ? 'bg-customHover text-blue-600 rounded-tr-[4rem] rounded-br-[4rem]' : 'hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem]'
          }`}
          onClick={() => handleItemClick('skill-test')}
        >
          <i className="fa-solid fa-award"></i>
          <p className='whitespace-nowrap'>Skill Test</p>
        </div>

        <div
          className={`flex items-center gap-5 pl-6 pt-6 pb-6 cursor-pointer ${
            activeItem === 'internship' ? 'bg-customHover text-blue-600 rounded-tr-[4rem] rounded-br-[4rem]' : 'hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem]'
          }`}
          onClick={() => handleItemClick('internship')}
        >
          <i className="fa-regular fa-file"></i>
          <p className='whitespace-nowrap'>Internship</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

