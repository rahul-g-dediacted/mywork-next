import { MdOutlineFilterAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";

export const Mjobhired = () => {
  return (
    <div className="w-full">
      <div className=" w-11/12 mx-auto">
        <div className="flex flex-col mt-10 ">
          <div className="w-full bg-white flex flex-col p-4 border-b my-2">
            <div className="flex justify-between">
              <Link to="/ee/jobdesc" className="font-semibold">
                Freelancer name
              </Link>
            </div>
            <div className="flex items-center text-sm mt-1">
              <BiTimeFive />
              <p className="ml-1">Posted 10 hours ago</p>
            </div>
            <Link to="/ee/jobdesc" className="text-sm text-[#777] my-3">
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
              <Link
                to="/ee/applyjob"
                className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-1 ml-2 px-4 rounded cursor-pointer"
              >
                Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
