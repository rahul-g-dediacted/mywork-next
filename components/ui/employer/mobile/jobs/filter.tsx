import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Mfilter = () => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Filter</h1>
        <Link to={`/er/jobs/mposting`}>
          <AiOutlineClose className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="flex flex-col p-4 border-b">
        <h1 className="text-lg font-medium">Location</h1>
        <div className="flex flex-wrap w-full">
          <p className="border m-2 p-1 rounded hover:bg-primary-100">Central</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">West</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">East</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">North</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">South</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">South</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">Abroad</p>
          <p className="border m-2 p-1 rounded hover:bg-primary-100">Central</p>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-lg font-medium">Success Ratings</h1>
        <div className="flex flex-col justify-start">
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" defaultChecked />
            <h1 className="ml-2 font-medium">Any Job Success</h1>
          </div>
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" />
            <h1 className="ml-2 font-medium">80% and Up</h1>
          </div>
          <div className="flex items-center p-4 rounded hover:bg-primary-100">
            <input type="radio" name="rating" />
            <h1 className="ml-2 font-medium">90% and Up</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
