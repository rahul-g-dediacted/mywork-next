import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Maddjob2 = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Post Job</h1>
        <Link to="/er/jobs/addjob">
          <AiOutlineClose className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>

      <div className="w-full">
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
          <div className=" flex justify-end text-xs absolute bottom-5 right-3">
            <Link
              to="/er/jobs/addjob"
              className="border py-2 px-6 mr-2 rounded"
            >
              BACK
            </Link>
            <Link
              to="/er/jobs/addjob3"
              className="border py-2 px-6 rounded bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white cursor-pointer"
            >
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
