"use client";
import Image from "next/image";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaMapMarkedAlt, FaRegBuilding } from "react-icons/fa";

export default function Sidebar({
  setSelected,
  selected,
}: {
  setSelected: Function;
  selected: string | null;
}) {
  return (
    <div className="min-w-[300px] h-full hidden md:block lg:block">
      <aside
        id="default-sidebar"
        className="w-full rounded-l-[40px] z-40 h-full"
        aria-label="Sidebar"
      >
        <div className="h-full rounded-l-[40px] py-4 overflow-y-auto bg-[#0e4884] text-white">
          <div className="mb-5">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>

          <div className="w-3/4 mx-auto bg-[#022446] py-2 rounded-md flex gap-2 flex-col">
            <div
              className={`flex items-center cursor-pointer h-10 rounded-md w-[90%] mx-auto ${
                selected === "condo" ? "bg-[#0e4884]" : "bg-white"
              }`}
              onClick={() => setSelected("condo")}
            >
              <h1
                className={`"text-md flex items-center  text-black cursor-pointer" ${
                  selected === "condo" ? "text-white" : ""
                }`}
                onClick={() => setSelected("condo")}
              >
                <BsBuildings size={25} className="ms-2" />
                <p className="ms-2 font-medium text-sm">CONDO</p>
              </h1>
            </div>

            <div
              className={`flex items-center cursor-pointer h-10  rounded-md w-[90%] mx-auto ${
                selected === "landed" ? "bg-[#0e4884]" : "bg-white"
              }`}
              onClick={() => setSelected("landed")}
            >
              <h1
                className={`"text-md flex text-black cursor-pointer" ${
                  selected === "landed" ? "text-white" : ""
                }`}
                onClick={() => setSelected("landed")}
              >
                <FaMapMarkedAlt size={25} className="ms-2" />
                <p className="ms-2 font-medium text-sm">LANDED</p>
              </h1>
            </div>
            <div
              className={`flex items-center cursor-pointer h-10 rounded-md w-[90%] mx-auto ${
                selected === "hdb" ? "bg-[#0e4884]" : "bg-white "
              }`}
              onClick={() => setSelected("hdb")}
            >
              <h1
                className={`"text-md flex items-center text-black cursor-pointer" ${
                  selected === "hdb" ? "text-white" : ""
                }`}
                onClick={() => setSelected("condo")}
              >
                <FaRegBuilding size={25} className="ms-2" />
                <p className="ms-2 font-medium text-sm">HDB</p>
              </h1>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
