// import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState } from "react";
import { Url } from "../../../components/ui/interface";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";

// export const MyInfo = ({ url }: Url) => {
  export default function MyInfo ({ url }: Url){

  const [hidden, setHidden] = useState(true);
  const handleClasses = () => {
    setHidden(!hidden);
  };

  return (
    <>


    
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="flex-1">
      <div className="flex items-center m-4">
        <Link href={"/account/desktop/accounts"}>
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">My Info</h1>
      </div>
      <div className="w-11/12 overflow-hidden mx-auto p-10 rounded shadow mt-10 bg-white flex flex-col relative">
        <div
          className={`absolute text-center ml-48 mt-20 z-20 ${
            hidden === true ? "hidden" : ""
          } w-[450px] px-12 bg-white rounded-lg shadow`}
        >
          <div className="w-full relative">
            <h1
              onClick={() => handleClasses()}
              className="absolute right-[-30px] top-2 text-3xl text-gray-400 cursor-pointer font-semibold"
            >
              x
            </h1>
          </div>
          <div className="text-center w-full my-8">
            <p className="text-sm text-gray-500">
              Creating a Nwe Account Allows You to use the app as a employer as
              well as freelancer
            </p>
          </div>
          <button className="w-full py-4 bg-primary-500 rounded-lg text-white font-semibold uppercase text-sm">
            + new employer account
          </button>
          <Link href="/account/desktop/freelancer">
            <button className="text-gray-600 w-full py-4 border text-sm mt-2 mb-8 rounded-lg uppercase font-semibold">
              + new freelancer account
            </button>
          </Link>
        </div>
        <div
          onClick={() => handleClasses()}
          className={`${
            hidden === true ? "hidden" : ""
          } z-10 absolute top-0 left-0 w-full h-[100%] bg-[#00000036]`}
        ></div>
        <div className="flex justify-between">
          <div className="flex flex-col mr-6 w-full">
            <h1 className="font-semibold">Name</h1>
            <input
              type="text"
              className="w-full p-3 rounded-lg outline-none bg-transparent mt-3 border"
              placeholder="someone"
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Email</h1>
            <input
              type="text"
              className="w-full p-3 rounded-lg outline-none bg-transparent mt-3 border"
              placeholder="somemail@someone.com"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5 border-t pt-4">
          <div className="flex flex-col mr-6 w-full">
            <h1 className="font-semibold">Website</h1>
            <input
              type="text"
              className="w-full p-3 rounded-lg outline-none bg-transparent mt-3 border"
              placeholder="some.com"
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Name</h1>
            <input
              type="text"
              className="w-full p-3 rounded-lg outline-none bg-transparent mt-3 border"
              placeholder="Someone"
            />
          </div>
        </div>
        <div className="flex w-full flex-col mt-3 pb-5 border-b">
          <h1 className="font-semibold">Description</h1>
          <input
            type="text"
            placeholder="Some"
            className="px-3 mt-3 py-5 border rounded-lg"
          />
        </div>
        <p className="text-sm my-2">
          This is a <span className="text-primary-500 ">Client</span> account
        </p>
        <div className="flex justify-end">
          <button className="py-3 px-4 border text-sm rounded-lg mr-3 font-semibold bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white">
            Close Account
          </button>
          <button
            onClick={() => handleClasses()}
            className="py-3 px-4 border text-sm rounded-lg font-semibold"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
          </main>
        </div>


    
    </>
  );
};
