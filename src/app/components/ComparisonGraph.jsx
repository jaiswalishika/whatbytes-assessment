import React from 'react'
import Image from 'next/image'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Dot,
} from 'recharts';

// Custom Dot to highlight the percentile
const CustomDot = ({ cx, cy, payload, percentile }) => {
    if (payload.percentile === percentile) {
      return (
        <circle cx={cx} cy={cy} r={2} stroke="blue" strokeWidth={2} fill="white" />
      );
    }
    return <circle cx={cx} cy={cy} r={2} stroke="blue" fill="white" />;
};

// Comparison Graph component
const ComparisonGraph = ({ percentile, data }) => {
  return (
    <div className='flex flex-col gap-5 border-[1px] border-customBorder rounded-md items-center w-full justify-center p-7'>
      <p className='font-bold min-w-full'>Comparison Graph</p>
      <div className='flex justify-between items-center text-left w-full'>
        <p className='text-customText'><span className='font-bold'>You scored {percentile}% percentile</span> which is lower than the <br/> average percentile of all engineers who took this assessment</p>
        <Image 
          src="/images/graph.png" 
          alt='graph image' 
          width={45} 
          height={40}
          className='whatbytes-image mb-4'
          />
      </div>
        {/* Comparison Graph */}
      <ResponsiveContainer width="100%" height={300} style={{ background: 'white'}}> 
        {/* XAxis maps the percentile values.
            YAxis maps the number of students. */}
        <LineChart data={data}>
          <XAxis dataKey="percentile" label='' />
          <YAxis label='' />
          <Tooltip />
          {/* Line for the data */}
          <Line
            type="monotone"
            dataKey="numberOfStudents"
            stroke="#8884d8"
            dot={<CustomDot percentile={percentile} />}
            activeDot={{ r: 8 }}
          />
          {/* Reference line for your percentile */}
          <ReferenceLine
            x={percentile}
            stroke="blue"
            label={{ value: 'your percentile', position: 'auto', fill: 'gray' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


export default ComparisonGraph
