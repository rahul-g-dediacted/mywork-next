import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

export const Mapplyjob = () => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Apply To job</h1>
        <Link to="/ee/jobs/search">
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="pt-3  w-3/4 mx-auto">
        <h1 className="font-medium">Job title,50 character space</h1>
        <div className="flex text-gray-600 items-center">
          <BiTimeFive />
          <p className="text-sm ml-2 mt-1">Posted 10 hours ago</p>
        </div>
        <p className="pt-4">Message</p>
      </div>
      <div className="w-3/4 mx-auto mt-2 ">
        <textarea
          placeholder="Your first message goes here"
          className="border h-40 p-3 w-full"
        />
      </div>
      <div className="flex flex-col items-center mt-[250px] w-1/4 mx-auto">
        <button className="bg-primary-500 rounded text-white w-full font-medium py-1 px-2 uppercase">
          Send
        </button>
      </div>
    </div>
  );
};
