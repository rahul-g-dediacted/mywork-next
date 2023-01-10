import { MdOutlineFilterAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

// import { Link } from "react-router-dom";
import Link from "next/link";
import  Filter, { toggleMenu } from "./filter";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";
import Navbar from "./navbar";

// export const MyPosting = () => {
  export default function MyPosting (){

  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
            <div className=" ml-24 w-[650px] ">
        <div className="flex justify-between mt-10">
          <div className="w-11/12 relative">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 font-medium outline-none text-gray-700 bg-transparent border-2 border-gray-300 w-full"
            />
            <AiOutlineSearch className="absolute right-3 top-2 text-3xl cursor-pointer text-[#777]" />
          </div>
          <div className="bg-[#e8e8e8] p-1 flex items-center relative">
            <MdOutlineFilterAlt
              onClick={() => toggleMenu()}
              className="text-3xl text-[#a19f9f] cursor-pointer z-20"
            />
            <Filter />
          </div>
        </div>
        <div className="flex flex-col mt-10 ">
          <div className="w-full bg-white flex flex-col p-4 shadow my-2 hover:bg-[#efefef]">
            <Link href="/er/jobs/job/description" className="font-semibold">
              Job Name
            </Link>
            <div className="flex items-center text-sm mt-2 text-[#7a7a7a]">
              <BiTimeFive />
              <p className="ml-1">Posted 10 hours ago</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center text-sm text-red-500">
                <GoLocation />
                <p className="">Tuas south, street 1</p>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex flex-col ">
                <h1 className="font-semibold">25</h1>
                <p className="text-sm">$ per hour</p>
              </div>
              <div className="text-right">
                <Link
                  href="/er/jobs"
                  className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-600 text-white py-2 px-8 rounded cursor-pointer"
                >
                  Invite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/er/jobs/addJob"
          className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-3 px-16 rounded-lg cursor-pointer absolute right-2 top-12"
        >
          POST JOB
        </Link>
      </div>
          </main>
        </div>



      
    </>
  );
};
