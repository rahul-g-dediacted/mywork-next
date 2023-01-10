// import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";

export default function Freelancer (){
  return (
    <>

<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="flex-1">
      <div className="flex items-center m-4">
        <Link href="/account-er/desktop/myInfo">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">My Info</h1>
      </div>
      <div className="w-11/12 mx-auto p-10 rounded shadow mt-10 bg-white flex flex-col">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Name</h1>
            <FiEdit3 />
          </div>
          <input
            type="text"
            className="w-full p-3 rounded-lg outline-none bg-transparent mt-3 border"
            placeholder="someone"
          />
        </div>
        <div className="flex flex-col w-fit my-12">
          <h1>Add Your Photo</h1>
          <div className="border border-[#ebebeb] rounded mt-2">
            <label className="upload__photo flex items-center justify-start cursor-pointer  m-1">
              <p className="bg-[#ebebeb] px-6 py-2">Choose</p>
              <input
                type="file"
                className="upload__photo border border-white"
              />
            </label>
          </div>
        </div>
        <p className="text-sm my-2 pt-3 border-t text-gray-500">
          This is a Freelancer account
        </p>
        <div className="flex justify-start mt-4">
          <button className="py-3 px-4 border text-sm rounded-lg mr-3 font-semibold bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white">
            Close Account
          </button>
          <button className="py-3 px-4 border text-sm rounded-lg font-semibold">
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
