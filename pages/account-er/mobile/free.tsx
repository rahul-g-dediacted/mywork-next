import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const Free = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Free</h1>
        <Link to={`/${url}/account/subscription`}>
          <h1 className="text-2xl absolute top-2 text-white left-3">x</h1>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="rounded-full w-20 h-20 border border-primary-500">
          <h1 className="text-2xl font-medium p-6 text-primary-500">0$</h1>
        </div>
        <p className="text-xl font-medium mt-4">Per Month</p>
        <p className="text-xl font-medium mt-4">Current Plan</p>
      </div>
      <div className="flex items-center mx-8 py-3 border-b border-t mt-4">
        <BsFillCheckCircleFill className="text-primary-500 mr-4" />
        <p className="font-medium">Get unlimited job posts</p>
      </div>
      <div className="flex items-center mx-8 py-3 border-b">
        <BsFillCheckCircleFill className="text-primary-500 mr-4" />
        <p className="font-medium">Apply to unlimited job posts</p>
      </div>
      <div className="mx-6 mt-72">
        <button className="w-full rounded bg-primary-500 uppercase text-white font-medium py-3">
          Continue
        </button>
      </div>
    </div>
  );
};
