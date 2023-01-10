import { FiEdit3 } from "react-icons/fi";

// export const ProfileEdit4 = () => {
  export default function ProfileEdit4 (){

  return (
    <>
      <h1 className="text-4xl mt-10 text-left font-semibold text-[#4a4a4a]">
        Welcome, Sana Smith
      </h1>
      <div className="w-full rounded shadow relative">
        <div className="flex flex-col bg-white mt-12 p-6">
          <div className="flex items-center mt-6">
            <h1 className="text-left text-xl font-semibold">Industry: </h1>
            <div className="flex-1">
              <p className="text-center text-lg text-[#4c4c4c]">Construction</p>
            </div>
          </div>
          <div className="flex mt-6">
            <h1 className="text-left text-xl font-semibold">
              Price per hour:{" "}
            </h1>
            <div className="flex flex-col ml-6">
              <h1 className="text-left text-lg text-[#4c4c4c]">
                welder : 12 $/hr
              </h1>
              <h1 className="text-left text-lg text-[#4c4c4c]">
                Fitter : 12 $/hr
              </h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-left text-xl font-semibold">About Me: </h1>
            <h1 className="w-full h-28 mt-2 p-2 border text-left text-sm text-[#4c4c4c]">
              Previous experiences, companies worked for, etc..
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-left text-xl font-semibold">Skills</h1>
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
        <div className="bg-orange-500 absolute p-1 rounded-full top-[-17px] right-0 cursor-pointer shadow-lg">
          <FiEdit3 className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};
