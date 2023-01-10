import { MdOutlineFilterAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { GoLocation } from "react-icons/go";
// import { Link } from "react-router-dom";
import  Filter,{ toggleMenu } from "./filter";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";
import Navbar from "./navbar";

// export const Invite = () => {
  export default function Invite (){

  return (
<>

    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <Navbar />
          <div className="ml-24 w-[650px] relative">
      <div className="flex justify-between mt-10">
        <div className="w-11/12 relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 outline-none bg-transparent text-gray-700 font-medium border-2 border-gray-300 w-full"
          />
          <AiOutlineSearch className="absolute right-3 top-2 text-3xl cursor-pointer text-[#777]" />
        </div>
        <div className="bg-[#e8e8e8] p-1 flex items-center relative">
          <MdOutlineFilterAlt
            onClick={() => toggleMenu()}
            className="text-3xl text-[#a19f9f] cursor-pointer"
          />
          <Filter />
        </div>
      </div>
      <div className="flex flex-col mt-10 ">
        <div className="w-full bg-white flex flex-col p-4 shadow my-2">
          <div className="flex justify-between">
            <Link href="/ee/jobdesc" className="font-semibold">
              Job Title
            </Link>
            <MdFavoriteBorder className="cursor-pointer" />
          </div>
          <div className="flex items-center text-sm mt-1">
            <BiTimeFive />
            <p className="ml-1">Posted 10 hours ago</p>
          </div>
          <Link href="/ee/jobdesc" className="text-sm text-[#777] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eos magnam voluptatibus beatae fugiat vel nesciunt facere, totam
            itaque autem, dolore impedit maxime ut! Voluptatem accusamus
            mollitia explicabo totam rerum.
          </Link>
          <div className="flex justify-between">
            <div className="flex items-center text-sm text-red-500">
              <GoLocation />
              <p className="">Tuas south, street 1</p>
            </div>
            <div className="flex">
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm border mr-1 py-2 px-8 rounded cursor-pointer"
              >
                Accept
              </Link>
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer"
              >
                Reject
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col p-4 shadow my-2">
          <div className="flex justify-between">
            <Link href="/ee/jobdesc" className="font-semibold">
              Job Title
            </Link>
            <MdFavoriteBorder className="cursor-pointer" />
          </div>
          <div className="flex items-center text-sm mt-1">
            <BiTimeFive />
            <p className="ml-1">Posted 10 hours ago</p>
          </div>
          <Link href="/ee/jobdesc" className="text-sm text-[#777] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eos magnam voluptatibus beatae fugiat vel nesciunt facere, totam
            itaque autem, dolore impedit maxime ut! Voluptatem accusamus
            mollitia explicabo totam rerum.
          </Link>
          <div className="flex justify-between">
            <div className="flex items-center text-sm text-red-500">
              <GoLocation />
              <p className="">Tuas south, street 1</p>
            </div>
            <div className="flex">
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm border mr-1 py-2 px-8 rounded cursor-pointer"
              >
                Accept
              </Link>
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer"
              >
                Reject
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col p-4 shadow my-2">
          <div className="flex justify-between">
            <Link href="/ee/jobdesc" className="font-semibold">
              Job Title
            </Link>
            <MdFavoriteBorder className="cursor-pointer" />
          </div>
          <div className="flex items-center text-sm mt-1">
            <BiTimeFive />
            <p className="ml-1">Posted 10 hours ago</p>
          </div>
          <Link href="/ee/jobdesc" className="text-sm text-[#777] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eos magnam voluptatibus beatae fugiat vel nesciunt facere, totam
            itaque autem, dolore impedit maxime ut! Voluptatem accusamus
            mollitia explicabo totam rerum.
          </Link>
          <div className="flex justify-between">
            <div className="flex items-center text-sm text-red-500">
              <GoLocation />
              <p className="">Tuas south, street 1</p>
            </div>
            <div className="flex">
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm border mr-1 py-2 px-8 rounded cursor-pointer"
              >
                Accept
              </Link>
              <Link
                href="/ee/jobs/search"
                className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer"
              >
                Reject
              </Link>
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
