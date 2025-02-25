import React from 'react'

//progress bar component for syllabus analysis
const ProgressBar = ({percentage, color}) => {
  return (
    <div className={`${color}1 h-2 w-full rounded-full`}>
      <div className={`${color} h-2 w-full rounded-full`} style={{ width: `${percentage}%`}}></div>
    </div>
  )
}

export default ProgressBar
