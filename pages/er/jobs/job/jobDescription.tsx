import Sidebar from "../../../../components/ui/employer/desktop/sidebar";
import Navbar from "./navbar";

// export const JobDescriptions = () => {
  export default function JobDescriptions (){

  return (
    <>
    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
          <div className="w-[450px] mx-auto rounded ">
      <div className="bg-white w-full py-4 shadow px-6 mt-3">
        <h1 className="text-lg font-semibold">Job Description</h1>
        <p className="text-sm text-[#4c4c4c]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          consequatur libero ex!
        </p>
        <h1 className="text-left text-xl font-semibold mt-3">
          Skills Required
        </h1>
        <div className="flex flex-wrap mt-2">
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
        </div>
        <h1 className="text-lg font-semibold mt-3">People Required</h1>
        <p className="text-sm text-[#4c4c4c] mt-2">3</p>
        <h1 className="text-lg font-semibold mt-3">Pay By</h1>
        <p className="text-sm text-[#4c4c4c] mt-2">Hourly</p>
        <h1 className="text-lg font-semibold mt-3">Cost</h1>
        <p className="text-sm text-[#4c4c4c] mt-2">12 $ Per Hour</p>
        <h1 className="text-lg font-semibold mt-3">Notes</h1>
        <p className="text-sm text-[#4c4c4c] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, odit
          amet.
        </p>
      </div>
    </div>
          </main>
        </div>


    
    </>
  );
};
