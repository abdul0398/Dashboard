"use client";
import { allProjects } from "@/data/constants";
import { customStyles } from "@/style/form.style";
import Select from "react-select";
import WindowedSelect from "react-windowed-select";
export default function Condo() {
  const projectOption = allProjects.map((project) => {
    return {
      value: project,
      label: project,
    };
  });

  const months = [
    {
      value: "0-3 months",
      label: "0-3 months",
    },
    {
      value: "1-3 months",
      label: "1-3 months",
    },
    {
      value: "6-12 months",
      label: "6-12 months",
    },
    {
      value: "Exploring options",
      label: "Exploring options",
    },
  ];
  return (
    <div className="w-full max-w-[800px] mx-auto mt-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 gap-y-5 mb-5">
        <div className="">
          <WindowedSelect
            styles={customStyles}
            placeholder={"Select Project"}
            options={projectOption}
            name="projectName"
            windowThreshold={50}
          />
        </div>

        <div className="">
          <input
            name="blk"
            className="bg-gray-200 text-sm appearance-none placeholder:text-black border-2 border-gray-200 rounded-md h-12 shadow-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
            type="text"
            placeholder="Write your block number here?"
          />
        </div>
        <div className="">
          <Select
            styles={customStyles}
            placeholder={"When do you plan to sell you property?"}
            options={months}
            name="sellDuration"
          />
        </div>
        <div className="">
          <input
            name="units"
            className="bg-gray-200 text-sm appearance-none border-2 placeholder:text-black border-gray-200 rounded-md h-12 shadow-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
            type="text"
            placeholder="What is your unit number?"
          />
        </div>
      </div>
    </div>
  );
}
