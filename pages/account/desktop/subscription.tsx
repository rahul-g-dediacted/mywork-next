import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";
export default function Subscription () {
  const [classesName, setClassesName] = useState(true);
  const classes = {
    selected: "bg-primary-500 text-white",
    notSelected: "bg-white text-black",
  };
  const handleClasses = () => {
    setClassesName(!classesName);
  };

  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full">
      <div className="flex items-center m-4">
        <Link href="/account/desktop/accounts">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">Manage Subscription</h1>
      </div>
      <div className="flex flex-col w-11/12 mx-auto bg-white rounded shadow relative">
        <div className="bg-primary-100 rounded  absolute right-2 top-2 cursor-pointer">
          <h1 className="px-4 py-1 text-sm flex items-center ">
            Billing Method{" "}
            <Link href="/account/desktop/addBilling" className="ml-2 text-2xl">
              +
            </Link>
          </h1>
        </div>
        <div className="mt-4 text-center flex flex-col">
          <h1 className="font-semibold mb-2">Select Plan</h1>
          <div className="flex justify-center rounded-lg border border-primary-500 w-fit mx-auto p-[1px]">
            <button
              onClick={() => handleClasses()}
              className={`py-2 px-4 text-sm font-semibold rounded-lg bg-primary-500 ${
                classesName === true ? classes.selected : classes.notSelected
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleClasses()}
              className={`py-2 px-5 text-sm font-semibold rounded-lg ml-1 ${
                classesName === true ? classes.notSelected : classes.selected
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-2">
          <div className="w-[250px] border shadow rounded">
            <div className="py-8 bg-primary-400 rounded relative">
              <div className="rounded-full border-2 border-primary-500 left-[94px] w-fit bg-white p-3 absolute">
                <RiSendPlaneFill className="text-primary-500 text-3xl" />
              </div>
            </div>
            <div className="text-center mt-8">
              <h1 className="text-xl text-primary-500">Free</h1>
              <p className="text-xs">
                Pay $0 Per {classesName === true ? "Month" : "Year"}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-primary-500" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-primary-500" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-primary-500" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-primary-500" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
            </div>
            <div className="text-center mt-16 mb-4 mx-4 rounded bg-primary-500">
              <button className="uppercase w-full text-sm py-2 text-white">
                activate plan
              </button>
            </div>
          </div>
          <div className="w-[250px] border shadow rounded ml-16">
            <div className="py-8 bg-gray-200 rounded relative">
              <div className="rounded-full border-2 border-gray-200 left-[94px] w-fit bg-white p-3 absolute">
                <IoIosRocket className="text-gray-400 text-3xl" />
              </div>
            </div>
            <div className="text-center mt-8">
              <h1 className="text-xl ">Free</h1>
              <p className="text-xs">
                Pay $5 Per {classesName === true ? "Month" : "Year"}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-gray-400" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-gray-400" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-gray-400" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
              <div className="flex items-center mx-4 py-3 border-t border-gray-200">
                <BsFillCheckCircleFill className="text-gray-400" />
                <p className="text-sm text-gray-700 ml-3">
                  Lorem ipsum dolor sit amet .
                </p>
              </div>
            </div>
            <div className="text-center mt-16 mb-4 mx-4 rounded bg-gray-400">
              <button className="uppercase w-full text-sm py-2 text-white">
                choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
          </main>
        </div>

   
    </>
  );
};
