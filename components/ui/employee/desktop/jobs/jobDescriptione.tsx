// import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
// export const JobDescription = () => {
  export default function JobDescription (){

  return (
    <div className="w-full">
      <div className="flex items-center  font-semibold m-4">
        <Link href="/ee/jobs/">
          <BsArrowLeftShort className="text-3xl" />
        </Link>
        <h1 className="text-2xl">Jobs Description</h1>
      </div>
      <div className="w-11/12 mt-10 py-6 px-10 mx-auto text-left bg-white rounded shadow">
        <h1 className="text-3xl font-semibold">
          Job title, 50 character space
        </h1>
        <div className="flex items-center text-sm mt-1 text-[#777]">
          <BiTimeFive />
          <p className="ml-1">Posted 10 hours ago</p>
        </div>
        <h1 className="text-2xl font-semibold mt-6">Start Date</h1>
        <div className="flex items-center text-sm mt-1 text-[#777]">
          <BsCalendarDate />
          <p className="ml-1">12-jun-2021</p>
        </div>
        <h1 className="text-2xl font-semibold mt-6">Job Description</h1>
        <p>some job description max of 200 words.</p>
        <h1 className="text-2xl font-semibold mt-6">Location</h1>
        <div className="flex items-center text-lg font-semibold  text-[#777] mt-2">
          <GoLocation />
          <p className="ml-2">Tuas south, street 1</p>
          <Link
            href="/ee/profile"
            className="ml-1 font-semibold text-primary-500"
          >
            ( Show Map )
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mt-6">Price</h1>
        <div className="flex items-center text-[#777] mt-2">
          <h1>15 $/hr</h1>
          <h1 className="ml-6">200 $(Lumpsum)</h1>
        </div>
        <div className="flex justify-end my-8">
          <Link
            href="/ee/applyjob"
            className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer uppercase"
          >
            Apply to job
          </Link>
        </div>
      </div>
    </div>
  );
};
