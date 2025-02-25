import React from 'react'
import ProgressBar from './ProgressBar'

//syllabus anlysis component
const SyllabusAnalysis = () => {
  return (
    <div className='flex flex-col gap-5 border-[1px] border-customBorder rounded-md items-center w-full justify-center p-7 '>
      <p className='font-bold min-w-full'>Syllabus Wise Analysis</p>
      <div className='flex flex-col gap-5 w-full'>
        <div className='flex flex-col gap-2'>
            <p className='text-customText'>HTML Tools, Forms, History</p>
            <div className="flex items-center gap-2">
                <ProgressBar percentage={80} color='blue'/>
                <p className='text-blue-600 font-bold'>80%</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-customText'>Tags & References in HTML</p>
            <div className="flex items-center gap-2">
                <ProgressBar percentage={60} color='orange'/>
                <p className='text-orange-600 font-bold'>60%</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-customText'>Tables & References in HTML</p>
            <div className="flex items-center gap-2">
                <ProgressBar percentage={24} color='red'/>
                <p className='text-red-600 font-bold'>24%</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-customText'>Tables & CSS Basics</p>
            <div className="flex items-center gap-2">
                <ProgressBar percentage={96} color='green'/>
                <p className='text-green-600 font-bold'>96%</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SyllabusAnalysis
