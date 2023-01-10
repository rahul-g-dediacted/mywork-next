import { MdOutlineFilterAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { Filter, toggleMenu } from "./filter";

export const Msearch = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="flex  justify-between mt-10">
        <div className="w-11/12 mr-4  relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 font-medium rounded  outline-none text-gray-700 bg-transparent border-2 border-gray-300 w-full"
          />
          <AiOutlineSearch className="absolute right-3 top-2 text-3xl cursor-pointer text-[#777]" />
        </div>
        <div className="bg-[#e8e8e8] p-1 flex items-center relative">
          <MdOutlineFilterAlt
            onClick={() => toggleMenu()}
            className="text-3xl text-[#a19f9f] cursor-pointer z-20"
          />
          <Filter />
        </div>
      </div>
      <div className="flex flex-col mt-10 ">
        <div className="w-full bg-white flex flex-col p-4 shadow my-2 hover:bg-[#efefef]">
          <div className="flex justify-between">
            <Link to="/er/skills" className="font-semibold">
              Freelance Name
            </Link>
            <MdFavoriteBorder className="cursor-pointer" />
          </div>

          <Link to="/er/skills/search" className="text-sm text-[#777] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eos magnam voluptatibus beatae fugiat vel nesciunt facere, totam
            itaque autem, dolore impedit maxime ut! Voluptatem accusamus
            mollitia explicabo totam rerum.
          </Link>
          <div className="flex justify-between mt-3">
            <div className="flex items-center text-sm">
              <button className="mr-3 text-sm border  py-1 px-4 rounded cursor-pointer">
                Helper
              </button>
              <button className="text-sm border  py-1 px-4 rounded cursor-pointer">
                Welder
              </button>
            </div>
            <Link
              to="/er/skills/search"
              className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-1 px-4 rounded cursor-pointer"
            >
              Invite
            </Link>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col p-4 shadow my-2 hover:bg-[#efefef]">
          <div className="flex justify-between">
            <Link to="/er/skills" className="font-semibold">
              Freelance Name
            </Link>
            <MdFavoriteBorder className="cursor-pointer" />
          </div>

          <Link to="/er/skills/search" className="text-sm text-[#777] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eos magnam voluptatibus beatae fugiat vel nesciunt facere, totam
            itaque autem, dolore impedit maxime ut! Voluptatem accusamus
            mollitia explicabo totam rerum.
          </Link>
          <div className="flex justify-between mt-3">
            <div className="flex items-center text-sm">
              <button className="mr-3 text-sm border  py-1 px-4 rounded cursor-pointer">
                Helper
              </button>
              <button className="text-sm border  py-1 px-4 rounded cursor-pointer">
                Welder
              </button>
            </div>
            <Link
              to="/er/skills/search"
              className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-1 px-4 rounded cursor-pointer"
            >
              Invite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
