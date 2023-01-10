// import { Link } from "react-router-dom";
import Link from "next/link";
import Sidebar from "../../../components/ui/employer/desktop/sidebar";

// export const AddJob = () => {
  export default function AddJob (){

  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full">
      <div className="w-full">
        <div className="mt-16 abs_border relative flex before:absolute before:h-[2px] before:w-full before:bg-gray-300 before:bottom-0">
          <div className="flex items-center cursor-pointer ml-[90px]  text-gray-500 font-semibold text-lg z-10">
            <input type="radio" name="post" />
            <h1 className="ml-1">Post A New Job</h1>
          </div>
          <div className="flex items-center cursor-pointer ml-[90px]  text-gray-500 font-semibold text-lg z-10">
            <input type="radio" name="post" />
            <h1 className="ml-1">Reuse Previous Job Posting</h1>
          </div>
          <div className="flex items-center cursor-pointer ml-[90px]  text-gray-500 font-semibold text-lg z-10">
            <input type="radio" name="post" />
            <h1 className="ml-1">Edit Draft</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-48">
        <Link
          href="/er/jobs/addJob2"
          className="px-14 py-3 bg-primary-500 text-white rounded-lg"
        >
          CONTINUE
        </Link>
      </div>
    </div>
          </main>
        </div>

    
    </>
  );
};
