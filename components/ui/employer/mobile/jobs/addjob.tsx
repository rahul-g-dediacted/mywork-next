import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Maddjob = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Post Job</h1>
        <Link to="/er/jobs">
          <AiOutlineClose className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex flex-col justify-start">
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" defaultChecked />
            <h1 className="ml-2 font-medium">Post a New Job</h1>
          </div>
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" />
            <h1 className="ml-2 font-medium">Reuse Previous Job Posting</h1>
          </div>
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" />
            <h1 className="ml-2 font-medium">Edit Draft</h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-40">
        <Link to="/er/jobs/addjob2">
          <button className="uppercase px-4 bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white rounded py-2">
            continue
          </button>
        </Link>
      </div>
    </div>
  );
};
