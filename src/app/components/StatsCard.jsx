"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Dynamically import PieChart to disable SSR
const PieChartNoSSR = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  { ssr: false }
);

const StatsCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [quickStatistics, setQuickStatistics] = useState({
    quickStatistics1: {
      rank: 1,
      description: "Your Rank",
      img: "/trophy.png",
      border: "border-b",
    },
    quickStatistics2: {
      percentile: 30,
      description: "Percentile",
      img: "/clipboard.png",
      border: "border-b",
    },
    quickStatistics3: {
      currentScore: 10,
      description: "Correct Answer",
      img: "/check.png",
      totalQuestionCount: 15,
    },
  });
  const COLORS = ["#0088FE", "#D3D3D3"];
  const [quicAnalysisData, setQuicAnalysisData] = useState([]);
  useEffect(() => {
    setIsClient(true); // Ensure the component renders only on the client
  }, []);

  const data = {
    title: "Hyper Text Markup Language",
    questions: "08",
    duration: "15 mins",
    submittedOn: "5 June 2021",
  };

  const syllabusWiseAnalysis = [
    {
      title: "HTML tools, forms, history",
      width: "80%",
      bgColor: "bg-blue-500",
      color: "#3B82F6",
      outerBarColor: "#DEEFF5",
    },
    {
      title: "tags & refernces in HTML",
      width: "60%",
      bgColor: "bg-orange-400",
      color: "#FFA500",
      outerBarColor: "#FFE5B4",
    },
    {
      title: "tables & refernces in HTML",
      width: "24%",
      bgColor: "bg-red-500",
      color: "#EF4444",
      outerBarColor: "#FFA6A1",
    },
    {
      title: "tables & CSS basics",
      width: "96%",
      bgColor: "bg-green-500",
      color: "#008000",
      outerBarColor: "#90EE90",
    },
  ];

  const graphData = [
    {
      student: 0,
      score: 15,
    },
    {
      score: 1,
    },
    {
      score: 90,
    },
    {
      student: 25,
      score: 2,
    },
    {
      score: 40,
    },
    {
      score: 80,
    },
    {
      student: 50,
      score: 20,
    },
    {
      score: 90,
    },
    {
      score: 20,
    },
    {
      student: 75,
      score: 90,
    },
    {
      score: 30
    },
    {
      score: 25
    },
    {
      performance: "your percentile",
      student: 100,
      score: 60
    }
    
  ];

  const [formValues, setFormValues] = useState({
    rank: quickStatistics.quickStatistics1.rank,
    percentile: quickStatistics.quickStatistics2.percentile,
    currentScore: quickStatistics.quickStatistics3.currentScore,
  });

  const handleUpdateClick = () => {
    // Open the modal and initialize form values
    setFormValues({
      rank: quickStatistics.quickStatistics1.rank,
      percentile: quickStatistics.quickStatistics2.percentile,
      currentScore: quickStatistics.quickStatistics3.currentScore,
    });
    setIsUpdateOpen(true);
  };

  const handleCloseForm = () => {
    setIsUpdateOpen(false);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormValues({ ...formValues, [id]: value });

    if (!value.trim()) {
      if (id === "rank") {
        setErrors((prev) => ({ ...prev, [id]: `required | should be number` }));
      } else if (id === "percentile") {
        setErrors((prev) => ({
          ...prev,
          [id]: `required | percentile 0 - 100`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, [id]: `required | should be number` }));
      }
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSave = () => {
    const newErrors = {};
    if (!formValues.rank) {
      newErrors.rank = "Rank is required";
    }
    if (!formValues.percentile) {
      newErrors.percentile = "Percentile is required";
    }
    if (!formValues.currentScore) {
      newErrors.currentScore = "Current score is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Update state with new values
      setQuickStatistics((prev) => ({
        ...prev,
        quickStatistics1: { ...prev.quickStatistics1, rank: formValues.rank },
        quickStatistics2: {
          ...prev.quickStatistics2,
          percentile: formValues.percentile,
        },
        quickStatistics3: {
          ...prev.quickStatistics3,
          currentScore: formValues.currentScore,
        },
      }));

      // Close the modal
      setIsUpdateOpen(false);
    }
  };

  // Recalculate `quicAnalysisData` whenever currentScore or totalQuestionCount changes
  useEffect(() => {
    const updatedData = [
      {
        name: "Correct",
        value: parseInt(quickStatistics.quickStatistics3.currentScore),
      },
      {
        name: "Remaining",
        value:
          quickStatistics.quickStatistics3.totalQuestionCount -
          quickStatistics.quickStatistics3.currentScore,
      },
    ];
    setQuicAnalysisData(updatedData);
  }, [
    quickStatistics.quickStatistics3.currentScore,
    quickStatistics.quickStatistics3.totalQuestionCount,
  ]);

  return (
    <div className="p-5 lg:w-[80vw] lg:pr:2">
      <h2 className="mt-5 mb-5 sm:mb-0">Skill Test</h2>
      <div className="lg:flex  lg:mt-5 gap-5 lg:gap-3">
        <div>
          {/* Main card code which will update */}
          <div className="w-full h-full border p-5 rounded-md md:mt-5  md:flex md:items-center md:justify-between lg:mt-0 lg:w-[45vw] lg:h-auto lg:flex lg:items-center lg:justify-between lg:px-1 lg:gap-2 xl:px-5 2xl:px-5">
            <div className="w-16 object-cover lg:w-14">
              <img src="/html.png" alt="" />
            </div>
            <div className="mt-5 lg:mt-0">
              <h2 className="font-bold">{data.title}</h2>
              <p className="text-sm font-medium ">
                Questions: {data.questions} | Duration: {data.duration} |
                Submitted on {data.submittedOn}
              </p>
            </div>
            <div className="mt-5 lg:mt-0">
              <button
                onClick={handleUpdateClick}
                className="capitalize font-semibold py-2 px-7 text-lg rounded-xl text-white bg-blue-900 border-2 border-black lg:text-sm"
              >
                update
              </button>
            </div>
          </div>

          {/* Quick Staistics code */}
          <div className="w-full h-full mt-5  lg:w-[45vw] lg:h-auto ">
            <div className="border rounded-md p-5">
              <h2 className="text-lg font-bold">Quick Statistics</h2>
              <div className="md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center xl:justify-evenly">
                <div
                  className={`mt-5 flex items-center gap-5 border-b pb-5 md:border-none lg:pb-0  lg:lg:mr-2 xl:mr-0`}
                >
                  <div className="w-16 h-16 p-4 overflow-hidden rounded-full bg-gray-300 lg:w-12 lg:h-12 lg:p-1  2xl:w-16 2xl:h-16 2xl:p-2">
                    <img
                      className="w-full h-full object-cover rounded-full lg:p-1"
                      src={`${quickStatistics.quickStatistics1.img}`}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-min xl:w-max">
                    <h2 className="font-bold text-xl xl:text-2xl">
                      {quickStatistics.quickStatistics1.rank}
                    </h2>
                    <p className="uppercase lg:text-sm text-gray-400">
                      {quickStatistics.quickStatistics1.description}{" "}
                    </p>
                  </div>
                  <div className="bg-gray-300 w-[1px] h-20 hidden md:block"></div>
                </div>

                <div
                  className={`mt-5 flex items-center gap-5 border-b pb-5 lg:pb-0 md:border-none lg:lg:mr-2 xl:mr-0`}
                >
                  <div className="w-16 h-16 p-4 rounded-full bg-gray-300 lg:w-12 lg:h-12 lg:p-2 2xl:w-16 2xl:h-16 2xl:p-3">
                    <img
                      className="w-full h-full"
                      src={`${quickStatistics.quickStatistics2.img}`}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-min xl:w-max">
                    <h2 className="font-bold text-xl xl:text-2xl ">
                      {quickStatistics.quickStatistics2.percentile}%
                    </h2>
                    <p className="uppercase lg:text-sm text-gray-400">
                      {quickStatistics.quickStatistics2.description}{" "}
                    </p>
                  </div>
                  <div className="bg-gray-300 w-[1px] h-20 hidden md:block"></div>
                </div>

                <div
                  className={`mt-5 flex items-center gap-5  ${quickStatistics.quickStatistics3.rank} pb-5 lg:pb-0 lg:border-none`}
                >
                  <div className="w-16 h-16 p-4 rounded-full bg-gray-300 lg:w-12 lg:h-12 lg:p-3 2xl:w-16 2xl:h-16 2xl:p-33">
                    <img
                      className="w-full h-full"
                      src={`${quickStatistics.quickStatistics3.img}`}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-min xl:w-max">
                    <h2 className="font-bold text-xl xl:text-2xl">
                      {quickStatistics.quickStatistics3.currentScore}/
                      {quickStatistics.quickStatistics3.totalQuestionCount}
                    </h2>
                    <p className="uppercase lg:text-sm text-gray-400">
                      {quickStatistics.quickStatistics3.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparision Graph */}
          <div className="w-full h-full mt-5 border rounded-md p-5 lg:w-[45vw] lg:h-auto ">
            <div className="mt-5 lg:mt-0">
              <h2 className="text-lg font-bold capitalize">Comparison garph</h2>
            </div>
            <div className="flex justify-between mt-5">
              <div className="w-5/6">
                <p className="text-sm leading-6 xl:text-lg">
                  <span className="text-gray-600 font-bold">
                  You scored {quickStatistics.quickStatistics2.percentile}% percentile
                  </span> which is
                  lower than the <br />  average Percentile 72% of all the
                  enginners who took the assessment
                </p>
              </div>
              <div className="border  overflow-hidden rounded-full w-12 h-12 lg:w-10 lg:h-10 xl:w-16 xl:h-16">
                <img className="w-full h-full p-2 xl:p-3" src="/grow.png" alt="" />
              </div>
            </div>
            <div className="w-full h-72 mt-5">
              <ResponsiveContainer>
                <LineChart width={400} height={300} data={graphData}>
                  <XAxis dataKey="student" />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Line
                type="monotone"
                dataKey="performance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div>
          {/* Syllabus Wise Analysis */}
          <div className="w-full h-full mt-5 border rounded-md p-5 lg:w-auto  lg:mt-0 lg:overflow-hidden  lg:h-auto ">
            <div className="mt-5 lg:mt-0">
              <h2 className="text-lg font-bold capitalize">
                Syllabus wise analysis
              </h2>
            </div>
            {syllabusWiseAnalysis.map((info, index) => (
              <div key={index} className="mt-5">
                <p className="capitalize font-medium lg:text-sm">
                  {info.title}
                </p>
                <div className="flex items-center justify-between mt-5 gap-5 lg:mt-2">
                  {/* Outer bar */}
                  <div
                    className="w-full  rounded-full h-2"
                    style={{ backgroundColor: info.outerBarColor }}
                  >
                    {/* Inner bar */}
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ease-in-out ${info.bgColor}`}
                      style={{ width: info.width }}
                    ></div>
                  </div>
                  {/* Percentage Label */}
                  <span style={{ color: info.color }} className={`font-medium`}>
                    {info.width}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Question Analysis */}
          <div className="w-full h-full mt-5 border rounded-md p-5 lg:w-auto lg:h-auto ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Question Analysis</h2>
              <span className="text-blue-500 font-bold">
                {quickStatistics.quickStatistics3.currentScore}/
                {quickStatistics.quickStatistics3.totalQuestionCount}
              </span>
            </div>
            <div className="mt-5">
              <p>
                <span className="font-bold text-gray-600 text-sm">
                You scored {quickStatistics.quickStatistics3.currentScore}{" "}
                question correct out of {quickStatistics.quickStatistics3.totalQuestionCount}
                </span>. However it still needs some improvement.
              </p>
            </div>
            <div className="w-full h-full relative flex justify-center items-center">
              {isClient && (
                <PieChart width={300} height={300}>
                  <Pie
                    data={quicAnalysisData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#D3D3D3"
                    dataKey="value"
                  >
                    {quicAnalysisData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              )}
              {/* {isClient && (
            <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
              <Pie
              type="number"
              id="percentile"
              data={[
                {
                  name: "Correct",
                  value: quickStatistics.quickStatistics3.currentScore,
                },
                {
                  name: "Remaining",
                  value:
                    quickStatistics.quickStatistics3.totalQuestionCount -
                    quickStatistics.quickStatistics3.currentScore,
                },
              ]}
              cx={145}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              >
                <Cell key={`cell-0`} fill="#0088fe" />
                <Cell key={`cell-1`} fill="#D3D3D3" />
                {/* <Cell fill="#8884d8" /> */}
              {/* </Pie>
            </PieChart>
          )} */}

              <img
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-16 h-16"
                src="/dart.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Update Form */}
      {isUpdateOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto p-1"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white w-full max-w-2xl p-5 mt-10 rounded-md lg:p-10">
            <div className="flex justify-between items-baseline lg:items-center">
              <h2 className="text-lg font-bold mb-4 lg:text-xl">
                Update Scores
              </h2>
              <img className="w-10" src="/html.png" alt="" />
            </div>

            {/* Rank Input */}
            <div className="mb-4">
              <div className="lg:mt-5 lg:mb-2 lg:flex lg:justify-between">
                <div className="flex items-center gap-3 mb-3 lg:mb-0">
                  <div className="bg-blue-950 text-white font-semibold h-8 w-8 rounded-full grid place-content-center">
                    <h3>1</h3>
                  </div>
                  <label
                    htmlFor="rank"
                    className="block font-medium mb-1 capitalize"
                  >
                    update your <span className="font-bold">Rank</span>
                  </label>
                </div>
                <input
                  onChange={handleInputChange}
                  type="number"
                  id="rank"
                  value={formValues.rank}
                  className={`w-full border  outline-none ${
                    errors.rank
                      ? "border-red-500 lg:translate-x-[-25px]"
                      : "border-blue-600"
                  } rounded-md p-2 transition-transform duration-200  lg:w-48`}
                />
              </div>
              <div
                className={`mb-5 justify-end items-end text-xs ${
                  errors.rank ? "lg:flex lg:translate-x-[-40px]" : "hidden"
                }`}
              >
                {errors.rank && (
                  <span className="text-red-500 text-sm leading-none">{errors.rank}</span>
                )}
              </div>
            </div>

            {/* Percentile Input */}
            <div className="mb-4">
              <div className="lg:mt-5 lg:mb-2 lg:flex lg:justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-950 text-white font-semibold h-8 w-8 rounded-full grid place-content-center">
                    <h3>2</h3>
                  </div>
                  <label
                    htmlFor="percentile"
                    className="block font-medium capitalize mb-1"
                  >
                    update your <span className="font-bold">Percentile</span>
                  </label>
                </div>
                <input
                  onChange={handleInputChange}
                  type="number"
                  id="percentile"
                  value={formValues.percentile}
                  className={`w-full border outline-none ${
                    errors.percentile
                      ? "border-red-500 lg:translate-x-[-25px]"
                      : "border-blue-600"
                  } rounded-md p-2 transition-transform duration-200 lg:w-48`}
                />
              </div>
              <div
                className={`mb-5 justify-end items-end text-xs ${
                  errors.percentile ? "lg:flex lg:translate-x-[-40px]" : "hidden"
                }`}
              >
                {errors.percentile && (
                  <span className="text-red-500 text-sm leading-none">
                    {errors.percentile}
                  </span>
                )}
              </div>
            </div>

            {/* Current Score Input */}
            <div className="mb-4">
              <div className="lg:mt-5 lg:mb-2 lg:flex lg:justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-950 text-white font-semibold h-8 w-8 rounded-full grid place-content-center">
                    <h3>3</h3>
                  </div>
                  <label
                    htmlFor="currentScore"
                    className="block capitalize font-medium mb-1"
                  >
                    update your{" "}
                    <span className="font-bold">
                      Current Score (out of{" "}
                      {quickStatistics.quickStatistics3.totalQuestionCount})
                    </span>
                  </label>
                </div>
                <input
                  type="number"
                  id="currentScore"
                  value={formValues.currentScore}
                  onChange={handleInputChange}
                  className={`w-full border outline-none ${
                    errors.currentScore
                      ? "border-red-500 lg:translate-x-[-25px]"
                      : "border-blue-600"
                  } rounded-md p-2 lg:w-48`}
                />
              </div>
              <div
                className={`mb-5 justify-end items-end text-xs ${
                  errors.currentScore ? "lg:flex lg:translate-x-[-40px]" : "hidden"
                }`}
              >
                {errors.currentScore && (
                  <span className="text-red-500 text-sm leading-none">
                    {errors.currentScore}
                  </span>
                )}
              </div>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4 lg:space-x-10 lg:mt-10">
              <button
                onClick={handleCloseForm}
                className="px-4 py-2 border border-blue-950 text-blue-950 font-medium rounded-md hover:bg-gray-100"
              >
                cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-1 w-28 font-semibold px-4 py-2 rounded-xl text-white bg-blue-900 border-2 border-black "
              >
                save
                <IoIosArrowRoundForward size={25}  />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StatsCard;
