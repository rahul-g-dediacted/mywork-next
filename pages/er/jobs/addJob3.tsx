// import { Link } from "react-router-dom";
import Link from "next/link";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";
// export const AddJob3 = () => {
  export default function AddJob3 (){
  return (
    <>
    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-[450px] ml-40 ">
      <h1 className="text-left text-xl font-semibold mt-8">Post Job</h1>
      <div className="w-full rounded shadow bg-white">
        <div className="mt-3 px-6">
          <h1 className="text-2xl font-semibold mb-4 pt-4">
            How Many People Are Required
          </h1>
          <div className="w-5/6 relative rounded border-2">
            <input
              type="text"
              className="w-full p-3 outline-none font-semibold"
            />
            <p className="text-sm absolute bottom-10 left-4 text-[#797979]">
              Enter required People
            </p>
          </div>
        </div>
        <div className="flex flex-col  mt-6 px-6">
          <h1 className="text-left text-xl font-semibold">Pay By</h1>
          <div className="flex flex-col  items-start text-center font-semibold mt-2">
            <button className="w-5/6 bg-[#fbe9e7] uppercase py-2 rounded mb-2 font-semibold">
              Hourly pay
            </button>
            <button className="w-5/6 border py-2 uppercase rounded font-semibold text-[#4c4c4c]">
              fixed price lumpsum
            </button>
          </div>
          <h1 className="text-lg font-semibold mt-8 ">Price Per Hour</h1>
          <div className="w-28  flex items-center rounded-lg overflow-hidden border">
            <p className="w-[30%] bg-[#eeeeee] text-center p-2 font-semibold">
              $
            </p>
            <input
              type="text"
              className="w-[70%] p-2  outline-none border-l-0 font-semibold text-[#7a7a7a]"
            />
          </div>
          <p className="text-lg font-semibold mb-2 pt-4">
            Description (Optional)
          </p>
          <textarea className="text-gray-500 font-semibold w-5/6 p-2 h-22 border rounded outline-none"></textarea>
          <div className="my-4 w-5/6 flex justify-end text-xs ">
            <Link
              href="/er/jobs/addJob2"
              className="border py-2 px-6 mr-2 rounded"
            >
              BACK
            </Link>
            <Link
              href="/er/jobs/job/jobDescription"
              className="border py-2 px-6 rounded bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white cursor-pointer"
            >
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </div>
          </main>
        </div>


   
    </>
  );
};
