import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

//Question analysis component
const QuestionAnalysis = ({correctAnswers}) => {
    const total = 15;
    const percentage = (correctAnswers / 15) * 100;

  return (
    <div className='flex flex-col gap-5 border-[1px] border-customBorder rounded-md items-center w-full justify-center p-5'>
      <div className='flex justify-between w-full'>
        <p className='font-bold'>Question Analysis</p>
        <span className='font-bold text-blue-600'>{correctAnswers}/15</span>
      </div>
      <p className='text-customText font-medium text-[14px]'><span className='font-bold'>You Scored {correctAnswers} questions correct out of 15.
      </span> However it still needs some improvements
      </p>
      {/* Circular Progress Bar */}
      <div style={{ width: 120, height: 120, marginBottom: '20px', position: 'relative'}}>
        <CircularProgressbar
          value={percentage}
          text={''}
          strokeWidth={16} //make stroke thicker
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#3A7DF4', // Blue path
            textColor: '#3A7DF4', // Blue text
            trailColor: '#EAF2FE', // Light blue trail
            strokeLinecap: 'butt', // straight stroke edges
            rotation: 0.59,
          })}
        />
        <Image 
          src="/images/dartboard.png" 
          alt='dartboard image' 
          width={40} 
          height={40}
          className='dartboard-image'
        />
      </div>
    </div>
  )
}

export default QuestionAnalysis
