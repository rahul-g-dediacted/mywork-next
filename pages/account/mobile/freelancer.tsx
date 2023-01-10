import { Url } from "../../interface";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

export const Mfreelancer = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">My Info</h1>
        <Link to={`/${url}/account/info`}>
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="w-11/12 mt-5 mx-auto">
        <div className="flex flex-col w-full mt-3 text-left px-5">
          <div className="flex justify-between">
            <h1 className="font-medium my-2">Name</h1>
            <AiOutlineEdit className="text-xl" />
          </div>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Someone"
          />
        </div>
        <div className="flex flex-col border-b pb-3 w-full text-left px-5">
          <h1 className="font-medium my-2">Email</h1>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Someone@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
