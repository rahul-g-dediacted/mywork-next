// import { Link } from "react-router-dom";
import Link from "next/link";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";

// export const AddJob2 = () => {
  export default function AddJob2 (){
  return (
    <>
    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-[450px] ml-40 ">
      <h1 className="text-left text-xl font-semibold mt-8">Post Job</h1>
      <div className="w-full rounded shadow bg-white">
        <div className="mt-3 px-6">
          <h1 className="text-2xl font-semibold mb-4 pt-4">Job Title</h1>
          <div className="w-5/6 relative border-2 rounded">
            <input
              type="text"
              className="w-full p-3 outline-none  font-semibold"
            />
            <p className="text-sm absolute bottom-10 left-4 text-[#797979]">
              Enter Job Title
            </p>
          </div>
          <p className="text-sm font-normal text-gray-400 mt-1">
            eg. Need a welder for 3 days
          </p>
        </div>
        <div className="flex flex-col  mt-6 px-6">
          <h1 className="text-left text-xl font-semibold">Select Skills</h1>
          <div className="flex flex-wrap mt-3">
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Arc Welder 3G
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Welder 6G
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Filter
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Normal
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Helper
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Normal
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              TIG-Welder
            </p>
            <p className="border inline border-[#77777773] px-3 cursor-pointer rounded m-1 font-semibold py-1 hover:bg-primary-500 hover:text-white text-gray-500 bg-white">
              Normal
            </p>
          </div>
          <p className="text-sm text-red-500 font-semibold text-left ml-1 mt-1">
            Not found what what you want ?
          </p>
          <p className="text-2xl font-semibold mb-4 pt-4">Job Location</p>
          <input
            type="text"
            placeholder="Location"
            className=" font-semibold w-5/6 p-3 border rounded outline-none"
          />
          <div className="my-4 flex justify-end text-xs w-5/6">
            <Link
              href="/er/jobs/addJob"
              className="border py-2 px-6 mr-2 rounded"
            >
              BACK
            </Link>
            <Link
              href="/er/jobs/addJob3"
              className="border py-2 px-6 rounded bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white cursor-pointer"
            >
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </div>
          </main>
        </div>
    </>
    
  );
};
