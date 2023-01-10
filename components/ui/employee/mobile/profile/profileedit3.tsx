import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
export const Mprofileedit3 = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl mt-10 text-center font-semibold text-[#4a4a4a]">
        Welcome, Sana Smith
      </h1>
      <div className="w-full rounded shadow">
        <div className="flex flex-col bg-white mt-12 p-6">
          <h1 className="text-left text-xl font-semibold">Select Skills</h1>
          <div className="w-5/6 mt-4 relative border p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
            <AiOutlineSearch className="absolute text-2xl top-2 right-2" />
          </div>
          <div className="flex flex-wrap mt-4">
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Arc Welder 3G
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Welder 6G
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Filter
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Normal
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Helper
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              TIG-Welder
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Normal
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-36">
        <Link
          to="/ee/profile/edit4"
          className="shadow text-white py-3 px-14 rounded bg-primary-500 uppercase hover:bg-primary-400 cursor-pointer"
        >
          add
        </Link>
      </div>
    </div>
  );
};
