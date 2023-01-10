// import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";

// export const ApplyJob = () => {
  export default function ApplyJob (){

  return (
    <>

<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full">
      <div className="flex items-center font-semibold m-4">
        <Link href="/ee/jobs/search">
          <BsArrowLeftShort className="text-3xl" />
        </Link>
        <h1 className="text-2xl">Apply to Job</h1>
      </div>
      <div className="w-[450px] mx-auto bg-white mt-6 p-8 shadow">
        <h1 className="text-2xl font-semibold">
          Job title, 50 character space
        </h1>
        <div className="flex items-center text-sm mt-1 text-[#777]">
          <BiTimeFive />
          <p className="ml-1">Posted 10 hours ago</p>
        </div>
        <p className="font-xl font-semibold mt-8">Message</p>
        <textarea
          className="w-full h-[200px] border rounded mt-3 text-sm p-2"
          placeholder="Job Description"
        />
        <div className="text-center">
          <button className="font-semibold my-14 text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-12 rounded cursor-pointer uppercase">
            send
          </button>
        </div>
      </div>
    </div>
          </main>
        </div>

    
    </>
  );
};
