import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";

export const Msubscription = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Manage Subscription</h1>
        <Link to={`/${url}/account/`}>
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <h1 className="px-6 py-3 border-b font-medium">Current Subscription</h1>
      <div className="px-6 my-2 ">
        <div className="rounded bg-primary-500 mt-10  flex justify-between items-center overflow-hidden">
          <div className="flex items-center p-3">
            <div className="rounded-full bg-white p-3 mr-2">
              <RiSendPlaneFill className="text-primary-500 text-4xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl text-white">Free Forever Current plan</h1>
              <p className="text-white">Apply up to 5 job posts per month</p>
            </div>
          </div>
          <Link to={`/${url}/account/free`}>
            <div className="bg-primary-300 py-12 px-1">
              <IoIosArrowForward className="inline-block h-full text-white " />
            </div>
          </Link>
        </div>
        <div className="rounded border mt-3 flex justify-between items-center overflow-hidden">
          <div className="flex items-center p-3">
            <div className="rounded-full bg-gray-400 p-3 mr-2">
              <IoIosRocket className="text-white text-4xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">Premium</h1>
              <p className="">Apply unlimited job posts</p>
            </div>
          </div>
          <Link to={`/${url}/account/premium`}>
            <div className="bg-gray-200 py-12 px-1">
              <IoIosArrowForward className="inline-block h-full text-white " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
