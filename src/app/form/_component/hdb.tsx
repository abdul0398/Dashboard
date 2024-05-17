"use client";
import Select from "react-select";
import {
  street_blockRelation,
  town_StreetRelation,
  town_blockRelation,
} from "@/data/constants";
import { useState } from "react";
import { data } from "@/types/data";
import { customStyles } from "@/style/form.style";

export default function Hdb() {
  const [dataObj, setData] = useState({
    towns: Object.keys(town_StreetRelation)
      .sort()
      .map((item) => {
        return {
          value: item,
          label: item,
        };
      }),
    streets: [] as data[],
    blocks: [] as data[],
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
  const flattype = [
    {
      value: "1-ROOM",
      label: "1-ROOM",
    },
    {
      value: "2-ROOM",
      label: "2-ROOM",
    },
    {
      value: "3-ROOM",
      label: "3-ROOM",
    },
    {
      value: "4-ROOM",
      label: "4-ROOM",
    },
    {
      value: "5-ROOM",
      label: "5-ROOM",
    },
    {
      value: "EXECUTIVE",
      label: "EXECUTIVE",
    },
  ];

  const handleTownChange = (obj: any) => {
    const streets = town_StreetRelation[obj.value];
    const blocks = town_blockRelation[obj.value];

    setData((prev) => {
      return {
        towns: prev.towns,
        streets: streets.map((item) => ({
          value: item,
          label: item,
        })),
        blocks: [],
      };
    });
  };

  const handleStreetChange = (obj: any) => {
    const blocks = street_blockRelation[obj.value];
    setData((prev) => {
      return {
        towns: prev.towns,
        streets: prev.streets,
        blocks: blocks.sort().map((item) => ({
          value: item,
          label: item,
        })),
      };
    });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto mt-5 grid md:grid-cols-2 lg:grid-cols-2 gap-5 gap-y-5 mb-5">
      <div className="">
        <Select
          name="located"
          styles={customStyles}
          placeholder={"Where is your Hdb located?"}
          options={dataObj.towns}
          onChange={(e) => handleTownChange(e)}
        />
      </div>
      <div className="">
        <Select
          styles={customStyles}
          name="streetName"
          placeholder={"What is your Street Name?"}
          options={dataObj.streets}
          onChange={(e) => handleStreetChange(e)}
        />
      </div>
      <div className="">
        <Select
          styles={customStyles}
          name="blk"
          placeholder={"Block No (BLK)? "}
          options={dataObj.blocks}
        />
      </div>
      <div className="">
        <Select
          styles={customStyles}
          name="flatType"
          placeholder={"HDB Flat Type?"}
          options={flattype}
        />
      </div>
      <div className="">
        <Select
          styles={customStyles}
          name="sellDuration"
          placeholder={"Are you looking to sell your property?"}
          options={months}
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
  );
}
