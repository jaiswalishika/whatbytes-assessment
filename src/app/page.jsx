"use client";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Testbox from './components/Testbox';
import Image from 'next/image';
import SyllabusAnalysis from './components/Syllabus';
import QuestionAnalysis from './components/QuestionAnalysis';
import UpdateScoresModal from './components/Modal';
import ComparisonGraph from './components/ComparisonGraph';

// Whatbytes Dashboard page with all components
const page = () => {

  // use state management for variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  //sample data for graph comparison
  const sampleData = [
    { percentile: 0, numberOfStudents: 5 },
    { percentile: 10, numberOfStudents: 10 },
    { percentile: 20, numberOfStudents: 20 },
    { percentile: 30, numberOfStudents: 40 },
    { percentile: 40, numberOfStudents: 35 },
    { percentile: 50, numberOfStudents: 50 },
    { percentile: 60, numberOfStudents: 25 },
    { percentile: 70, numberOfStudents: 15 },
    { percentile: 80, numberOfStudents: 5 },
    { percentile: 90, numberOfStudents: 4 },
    { percentile: 100, numberOfStudents: 1 },
  ];

  //modal handlers
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='main background min-h-screen flex flex-col text-sm sm:text-base'>
      {/* Navbar component */}
      <Navbar/>
      {/* Sidebar component*/}
      <Sidebar/>
      
      <main className='xs:ml-[4rem] sm:ml-[4rem] md:ml-[11rem] lg:ml-[17rem] mt-[7rem] pr-[1rem]'>
        <p className='text-customText font-medium mb-5'>Skill Test</p>
        <div className='flex flex-wrap flex-row gap-4'>
          {/* First Column */}
          <div className='flex flex-col gap-5 md:w-full lg:w-[65%]'>
            {/* custom box for components */}
            <div className='flex flex-wrap gap-2 border-[1px] border-customBorder rounded-md iems-center justify-evenly p-6 w-full'>
              <div className='flex flex-col '>
              <Image 
                src="/images/HTML_5.png" 
                alt='HTML5 icon' 
                width={40} 
                height={40}

              />
              <div className='flex flex-col xs:text-center lg:text-left'>
                  <p className='font-bold xs:text-[16px]'>Hyper Text Markup Language</p>
                  <span className='text-customText xs:text-[12px]'>Questions: 08 | Duration: 15mins | Submitted on 5 June 2021</span>
              </div>
              </div>
              <button className='update my-6 px-6 py-1 h-10 text-white rounded-lg font-medium border-2 border-gray-800 xs:text-[12px]' onClick={handleOpenModal}>
                  Update
              </button>
            </div>

            {/* custom box for components */}
            <div className='flex flex-wrap gap-2 border-[1px] border-customBorder rounded-md iems-center justify-evenly p-6 w-full'>
              <p className='font-bold min-w-full'>Quick Statistics</p>
              <div className='flex flex-wrap min-w-full justify-start gap-2 items-center'>
                <div className='flex gap-4 items-center'>
                  <Image 
                    src="/images/trophy.png" 
                    alt='trophy image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>{rank}</p>
                    <span className='quick-stats uppercase text-[16px]'>Your Rank</span>
                  </div>
                </div>
                <div className='flex gap-4 items-center'>
                <div className='w-[2px] h-[6rem] bg-customBorder hidden md:block'></div>
                  <Image 
                    src="/images/checkbook.png" 
                    alt='checkbook image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>{percentile}%</p>
                    <span className='quick-stats uppercase text-[16px]'>Percentile</span>
                  </div>
                  <div className='w-[2px] h-[6rem] bg-customBorder hidden md:block'></div>
                </div>
                <div className='flex gap-4 items-center'>
                  <Image 
                    src="/images/tick.png" 
                    alt='tick image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>{correctAnswers} / 15</p>
                    <span className='quick-stats uppercase text-[16px]'>Correct Answers</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Comparison Graph */}
            <ComparisonGraph
            percentile={percentile}
            data={sampleData}
            />
          </div>
          {/* Second Column */}
          <div className='flex flex-col gap-5 md:w-full lg:w-[33%]'>
            {/* Syllabus Analysis component */}
            <SyllabusAnalysis/>
            {/* Question Analysis component */}
            <QuestionAnalysis
            correctAnswers = {correctAnswers}
            />
          </div>
        </div>
      </main>
      {/* Modal to update scores */}
      <UpdateScoresModal 
      isOpen={isModalOpen} 
      onClose={handleCloseModal} 
      rank={rank} percentile={percentile} 
      correctAnswers={correctAnswers} 
      setRank={setRank} 
      setPercentile={setPercentile} 
      setCorrectAnswers={setCorrectAnswers}
      />
    </div>
  )
}

export default page
