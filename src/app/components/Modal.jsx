import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Modal for updating scores, percentile & number of correct answers
const UpdateScoresModal = ({
  isOpen,
  onClose,
  rank,
  percentile,
  correctAnswers,
  setRank,
  setPercentile,
  setCorrectAnswers,
}) => {
  if (!isOpen) return null;

  // Local state to store temporary updates (only updated when "Save" is clicked)
  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAnswers, setTempCorrectAnswers] = useState(correctAnswers);

  // Update local state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTempRank(rank);
      setTempPercentile(percentile);
      setTempCorrectAnswers(correctAnswers);
    }
  }, [isOpen, rank, percentile, correctAnswers]);

  // Handle the update when the user clicks "Save"
  const handleUpdatedScores = (e) => {
    e.preventDefault();

    // Update's the parent component's state with the new values
    setRank(tempRank);
    setPercentile(tempPercentile);
    setCorrectAnswers(tempCorrectAnswers);

    // Optionally close the modal after saving
    onClose();
  };

  return (
    <div className="update-scores flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-black/80 to-black/80 my-0">
      <div>
        <form className="flex flex-col p-5 bg-white rounded-lg xs:gap-2 lg:gap-6" onSubmit={handleUpdatedScores}>
          <div className="flex items-center justify-between mb-5">
            <p className="font-bold text-[20px]">Update Scores</p>
            <Image
              src="/images/HTML_5.png"
              alt="HTML5 icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex justify-between xs:gap-4 lg:gap-7">
            <div className="flex gap-3 items-center">
              <label className="update rounded-[100%] text-white min-w-5 my-auto text-center font-medium">1</label>
              <p>Update your <span className="font-bold">Rank</span></p>
            </div>
            <div className='flex flex-col gap-0'>
                <input
                type="number"
                className={`border-[1px] ${tempRank? 'border-blue-600':'border-red-600'} rounded-md pt-2 pb-2 pl-3 font-bold appearance-none outline-none`}
                value={tempRank} // Used the local temporary state here
                onChange={(e) => {
                    const value = parseInt(e.target.value);

                    // Ensure value does not exceed 9999999
                    if (value <= 9999999 || isNaN(value)) {
                    setTempRank(value); // Update state only if valid
                    }
                }}
                placeholder='Rank'
                required
                />
                {/* Conditional label which only displays if input is empty */}
                {tempRank?'': <label className='text-red-600 text-[12px]'>required | should be number</label>}
            </div>
          </div>
          <div className="flex justify-between gap-7">
            <div className="flex gap-3 items-center">
              <label className="update rounded-[100%] text-white min-w-5 my-auto text-center font-medium">2</label>
              <p>Update your <span className="font-bold">Percentile</span></p>
            </div>
            <div className='flex flex-col gap-0'>
                <input
                type="number"
                className={`border-[1px] ${tempPercentile? 'border-blue-600':'border-red-600'} rounded-md pt-2 pb-2 pl-3 font-bold appearance-none outline-none`}
                value={tempPercentile} // Used the local temporary state here
                onChange={(e) => {
                    const value = parseInt(e.target.value);

                    // Ensure value does not exceed 100
                    if (value <= 100 || isNaN(value)) {
                    setTempPercentile(value); // Update state only if valid
                    }
                }}
                placeholder='Percentile'
                required
                />
                {/* Conditional label which only displays if input is empty */}
                {tempPercentile?'':<label className='text-red-600 text-[12px]'>required | percentile 0-100</label>}
            </div>
          </div>
          <div className="flex justify-between gap-7">
            <div className="flex gap-3 items-center">
              <label className="update rounded-[100%] text-white min-w-5 my-auto text-center font-medium">3</label>
              <p>Update your <span className="font-bold">Current Score (out of 15)</span></p>
            </div>
            <div className='flex flex-col gap-0'>
                <input
                type="number"
                className={`border-[1px] ${tempCorrectAnswers? 'border-blue-600':'border-red-600'} rounded-md pt-2 pb-2 pl-3 font-bold appearance-none outline-none`}
                value={tempCorrectAnswers} // Used the local temporary state here
                onChange={(e) => {
                    const value = parseInt(e.target.value);

                    // Ensure value does not exceed 15
                    if (value <= 15 || isNaN(value)) {
                    setTempCorrectAnswers(value); // Update state only if valid
                    }
                }} 
                placeholder='Current Score'
                required  
                />
                {/* Conditional label which only displays if input is empty */}
                {tempCorrectAnswers?'': <label className='text-red-600 text-[12px]'>required | Current score (out of 15)</label>}
            </div>
          </div>
          <div className="flex w-full justify-end gap-3">
            <button
              type="button"
              className="cancel rounded-lg px-3 py-2 font-bold"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="update update px-7 py-2 rounded-lg text-white font-medium border-[2px] border-gray-800"
            >
              Save &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateScoresModal;
