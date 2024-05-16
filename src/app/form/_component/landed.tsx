"use client";
import { customStyles } from "@/style/form.style";
import Select from "react-select";

export default function Landed() {
  const projectOption = [
    {
      value: "Hello",
      label: "Hello",
    },
  ];

  const reqOptions = [
    {
      value: "Past transactions report around the street",
      label: "Past transactions report around the street",
    },
    {
      value: "My estimated selling price",
      label: "My estimated selling price",
    },
    {
      value: "Get a gauge how much buyer are willing to offer",
      label: "Get a gauge how much buyer are willing to offer",
    },
  ];

  const planOptions = [
    {
      value: "Downsize",
      label: "Downsize",
    },
    {
      value: "Change of location",
      label: "Change of location",
    },
    {
      value: "Upgrade",
      label: "Upgrade",
    },
    {
      value: "Cash out",
      label: "Cash out",
    },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto mt-5 grid md:grid-cols-2 lg:grid-cols-2 gap-5 gap-y-5 mb-5">
      <div className="">
        <Select
          name="streets"
          styles={customStyles}
          placeholder={"Please select the street"}
          options={projectOption}
        />
      </div>

      <div className="">
        <input
          name="sqft"
          className="bg-gray-200 text-sm appearance-none border-2 placeholder:text-black border-gray-200 rounded-md h-12 shadow-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
          type="text"
          placeholder="Your sqft"
        />
      </div>
      <div className="">
        <Select
          styles={customStyles}
          name="request"
          placeholder={"I would Like to Know?"}
          options={reqOptions}
        />
      </div>

      <div className="">
        <Select
          name="plans"
          styles={customStyles}
          placeholder={"What are your plans?"}
          options={planOptions}
        />
      </div>
    </div>
  );
}
