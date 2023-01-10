// import "./Profile.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";

// export const ProfileEdit2 = () => {
  export default function ProfileEdit2 (){

  return (
    <>
      <h1 className="text-4xl mt-10 text-left font-semibold text-[#4a4a4a]">
        Welcome, Sana Smith
      </h1>
      <div className="w-full rounded shadow">
        <div className="flex flex-col bg-white mt-6 p-6">
          <h1 className="text-left text-xl font-semibold">Select Skills</h1>
          <div className="flex flex-wrap mt-3">
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
              Normal
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              TIG-Welder
            </p>
            <p className="border inline border-[#77777773] px-3 rounded m-1 py-1 bg-primary-500 text-white">
              Normal
            </p>
          </div>
          <p className="text-sm text-red-500 font-semibold text-left ml-1 mt-1">
            Not found what what you want ?
          </p>
        </div>
        <div className="flex flex-col bg-white  px-6 ">
          <div className="flex flex-col">
            <h1 className="text-left text-xl font-semibold">Add Your Photo</h1>
            <div className="border border-[#ebebeb] rounded mt-2">
              <label className="upload__photo flex items-center justify-start cursor-pointer  m-1">
                <p className="bg-[#ebebeb] px-6 py-2">Choose</p>
                <input
                  type="file"
                  className="upload__photo border border-white"
                />
              </label>
            </div>
            <p className="text-sm font-semibold mt-2 text-gray-500">OR</p>
            <div className="flex flex-col">
              <h1 className="text-left text-xl font-semibold">Photo</h1>
              <button className="w-full bg-[#ebebeb] py-3 mt-2">
                Take a Picture
              </button>
              <p className="text-sm text-gray-500 text-left pt-2 pb-6">
                Having your face on profile makes your appeal more
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/ee/profile/edit3"
          className="shadow text-white py-3 px-14 rounded bg-primary-500 uppercase hover:bg-primary-400 cursor-pointer"
        >
          next
        </Link>
      </div>
    </>
  );
};
