import { HiOutlineArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";
// import "./Input.css";

export default function Notifications () {
  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full">
      <div className="flex items-center m-4">
        <Link href="/account-er/desktop/accounts">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">Notification Settings</h1>
      </div>
      <div className="w-2/4 bg-white mt-12 mx-auto p-12 rounded shadow">
        <div className="flex justify-between items-start">
          <h1>Push Notification</h1>
          <label htmlFor="toggle" className="flex items-center  mt-2">
            <div className="relative cursor-pointer ">
              <input type="checkbox" id="toggle" className="sr-only x3 month" />
              <div className="block bg-[#9e9e9e] w-8 h-3  rounded-full"></div>
              <div className="dot absolute  top-[-2px] bg-black w-4 h-4 rounded-full transition duration-300"></div>
            </div>
          </label>
        </div>
        <div className="flex justify-between items-start mt-3">
          <h1>Email</h1>
          <label htmlFor="toggle2" className="flex items-center  mt-2">
            <div className="relative cursor-pointer ">
              <input
                type="checkbox"
                id="toggle2"
                className="sr-only x3 month"
              />
              <div className="block bg-[#9e9e9e] w-8 h-3  rounded-full"></div>
              <div className="dot absolute  top-[-2px] bg-black w-4 h-4 rounded-full transition duration-300"></div>
            </div>
          </label>
        </div>
        <div className="my-6 flex items-center">
          <input type="checkbox" />
          <h1 className="text-gray-600 ml-2">Offer Declined</h1>
        </div>
        <div className="my-6 flex items-center">
          <input type="checkbox" />
          <h1 className="text-gray-600 ml-2">
            Subscription Related Event Occured
          </h1>
        </div>
        <div className="my-6 flex items-center">
          <input type="checkbox" />
          <h1 className="text-gray-600 ml-2">Communication From iWork</h1>
        </div>
        <div className="w-full text-center">
          <button className="bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 w-1/4 py-2 rounded-lg text-white">
            SAVE
          </button>
        </div>
      </div>
    </div>          </main>
        </div>

    
    </>
  );
};
