"use client";

import { FormEvent, MouseEvent, useRef, useState } from "react";
import Condo from "./condo";
import Landed from "./landed";
import Hdb from "./hdb";
import Sidebar from "./sidebar/Main";
import { useRouter } from "next/navigation";
import { BsBuildings } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";
export default function FormComponent() {
  const [selected, setSelected] = useState<string>("condo");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formTypeHandler = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const value = (e.target as HTMLDivElement).getAttribute("data-id");
    if (value) {
      setSelected(value);
    }
  };
  const renderFormFields = () => {
    switch (selected) {
      case "condo":
        return <Condo />;
      case "landed":
        return <Landed />;
      case "hdb":
        return <Hdb />;
      default:
        return null;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const errorPara = document.getElementById("error-para") as HTMLElement;
    errorPara.innerHTML = "";
    // Doing validation here
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    if (!name || !email || !phone) {
      errorPara.innerHTML = "Please Complete the Form";
      return;
    }

    // email regex
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if (!emailRegex.test(email)) {
      errorPara.innerHTML = "Invalid Email";
      return;
    }

    if (phone.length != 8) {
      errorPara.innerHTML = "Invalid Phone Number";
      return;
    }

    if (selected === "condo") {
      const projectName = formData.get("projectName") as string;
      const blk = formData.get("blk") as string;
      const sellDuration = formData.get("sellDuration") as string;
      const units = formData.get("units") as string;

      if (!projectName || !blk || !sellDuration || !units) {
        errorPara.innerHTML = "Please Complete the Form";
        return;
      }
    } else if (selected == "hdb") {
      const located = formData.get("located") as string;
      const streetName = formData.get("streetName") as string;
      const blk = formData.get("blk") as string;
      const flatType = formData.get("flatType") as string;
      const sellDuration = formData.get("sellDuration") as string;
      const units = formData.get("units") as string;

      if (
        !located ||
        !streetName ||
        !blk ||
        !flatType ||
        !sellDuration ||
        !units
      ) {
        errorPara.innerHTML = "Please Complete the Form";
        return;
      }
    } else {
      const streets = formData.get("streets") as string;
      const sqft = formData.get("sqft") as string;
      const request = formData.get("request") as string;
      const plans = formData.get("plans") as string;

      if (!streets || !sqft || !request || !plans) {
        errorPara.innerHTML = "Please complete the Form";
        return;
      }
    }

    const formDataEntries = formData.entries();

    const simpleObject: any = {};

    for (let [key, value] of formDataEntries) {
      simpleObject[key] = value;
    }

    setLoading(true);

    const res = await fetch("/api/savelead", {
      method: "POST",
      body: JSON.stringify(simpleObject),
    });

    setLoading(false);
    if (selected == "condo") {
      router.push("https://condo-rent-dashboard.vercel.app/");
    } else if (selected == "hdb") {
      router.push("https://hdb-rental-portal.vercel.app/");
    }
  };

  return (
    <div className="flex h-full">
      <Sidebar setSelected={setSelected} selected={selected} />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="border rounded-lg lg:rounded-l-none md:rounded-l-none md:rounded-r-[40px] lg:rounded-r-[40px] shadow-lg lg:w-3/4 md:3/4 w-full overflow-auto p-5"
      >
        <div className="flex gap-3 w-fit mx-auto flex-wrap justify-center lg:hidden md:hidden">
          <div
            onClick={(e) => formTypeHandler(e)}
            data-id="condo"
            className={`cursor-pointer h-11 px-3 flex justify-center items-center w-48 rounded-full ${
              selected === "condo"
                ? "bg-[#0e4884] text-white"
                : "hover:bg-[#0e4884] hover:text-white border border-[#0e4884] text-[#0e4884]"
            }`}
          >
            <span data-id="condo" className="font-bold">
              Condo
            </span>
            <BsBuildings size={25} className="ms-2" />
          </div>
          <div
            onClick={(e) => formTypeHandler(e)}
            data-id="landed"
            className={`cursor-pointer h-11 px-3 flex justify-center items-center w-48 rounded-full ${
              selected === "landed"
                ? "bg-[#0e4884] text-white"
                : "hover:bg-[#0e4884] hover:text-white border border-[#0e4884] text-[#0e4884]"
            }`}
          >
            <span data-id="landed" className="font-bold">
              Landed
            </span>
            <FaMapMarkedAlt size={25} className="ms-2" />
          </div>
          <div
            onClick={(e) => formTypeHandler(e)}
            data-id="hdb"
            className={`cursor-pointer h-11 px-3 flex justify-center items-center w-48 rounded-full ${
              selected === "hdb"
                ? "bg-[#0e4884] text-white"
                : "hover:bg-[#0e4884] hover:text-white border border-[#0e4884] text-[#0e4884]"
            }`}
          >
            <span data-id="hdb" className="font-bold">
              HDB
            </span>
            <FaRegBuilding size={25} className="ms-2" />
          </div>
        </div>
        {renderFormFields()}
        <div className="mt-5">
          <p className="mb-3">Name</p>
          <input
            name="name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
            type="text"
            placeholder="Enter First Name.."
          />
        </div>

        <div className="mt-5">
          <p className="mb-3">Email</p>
          <input
            name="email"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
            type="text"
            placeholder="Enter Email Address"
          />
        </div>

        <div className="mt-5">
          <p className="mb-3">Phone</p>
          <input
            name="phone"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0e4884]"
            type="number"
            placeholder="+65"
          />
        </div>

        <p className="text-red-500 text-center" id="error-para"></p>
        <div className="mt-5 flex justify-center">
          <button
            className={`${
              loading
                ? "pointer-events-none flex justify-center py-1"
                : "border border-[#0e4884] shadow-sm min-w-32 font-bold rounded-full bg-[#0e4884] text-white px-3 py-2"
            }  `}
          >
            {loading ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
