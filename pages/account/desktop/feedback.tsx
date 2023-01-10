import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";
export default function Feedback () {
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
        <h1 className="text-xl font-semibold ml-2 ">Feedback</h1>
      </div>
      <div className="w-2/4 bg-white mt-12 mx-auto p-12 rounded shadow">
        <div className="flex justify-center w-full my-3">
          <AiFillStar className="text-2xl text-[#ff521e] mx-1" />
          <AiFillStar className="text-2xl text-[#ff521e] mx-1" />
          <AiFillStar className="text-2xl text-[#ff521e] mx-1" />
          <AiFillStar className="text-2xl text-[#ff521e] mx-1" />
          <AiOutlineStar className="text-2xl text-gray-700 mx-1" />
        </div>
        <div className="text-center my-5">
          <h1 className="text-xl text-gray-600">Loving It</h1>
        </div>
        <div className="w-4/5 mx-auto ">
          <textarea
            className="w-full outline-none border text-sm rounded p-2"
            placeholder="We Love to hear from you"
          ></textarea>
        </div>
        <div className="w-full text-center mt-6">
          <button className="bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 w-2/4 py-2 rounded-lg text-white">
            SEND
          </button>
        </div>
      </div>
    </div>          </main>
        </div>

   
    </>
  );
};
