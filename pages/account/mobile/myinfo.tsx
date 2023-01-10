import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdArrowBackIosNew } from "react-icons/md";

export const Mmyinfo = ({ url }: Url) => {
  const [hidden, setHidden] = useState(true);
  const handleClasses = () => {
    setHidden(!hidden);
  };

  return (
    <div className="w-full relative">
      <div
        onClick={() => handleClasses()}
        className={`${
          hidden === true ? "hidden" : ""
        } absolute w-full h-screen top-0 left-0 bg-[#0000004a] z-10 `}
      ></div>
      <div
        className={`absolute text-center w-5/6 rounded shadow mt-44 ml-10 z-20 ${
          hidden === true ? "hidden" : ""
        } w-[450px] px-12 bg-white rounded-lg shadow`}
      >
        <div className="w-full relative">
          <h1
            onClick={() => handleClasses()}
            className="absolute right-[-30px] top-2 text-3xl text-gray-400 cursor-pointer font-semibold"
          >
            x
          </h1>
        </div>
        <div className="text-center w-full my-8">
          <p className="text-sm text-gray-500">
            Creating a Nwe Account Allows You to use the app as a employer as
            well as freelancer
          </p>
        </div>
        <button className="w-full py-4 bg-primary-500 rounded-lg text-white font-semibold uppercase text-sm">
          + new employer account
        </button>
        <Link to={`/${url}/account/freelancer`}>
          <button className="text-gray-600 w-full py-4 border text-sm mt-2 mb-8 rounded-lg uppercase font-semibold">
            + new freelancer account
          </button>
        </Link>
      </div>
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">My Info</h1>
        <Link to={`/${url}/account`}>
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="flex flex-col w-full mt-3 text-left px-5">
        <h1 className="font-medium my-2">Name</h1>
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
      <div className="flex flex-col w-full my-3 text-left px-5">
        <h1 className="font-medium my-2">Website</h1>
        <input
          type="text"
          className="border rounded p-2"
          placeholder="some.com"
        />
      </div>
      <div className="flex flex-col w-full text-left px-5">
        <h1 className="font-medium my-2">Description</h1>
        <input
          type="text"
          className="border rounded p-2"
          placeholder="Something"
        />
      </div>
      <div className="flex flex-col w-full mt-4 border-b pb-3 text-left px-5">
        <h1 className="font-medium my-2">Address</h1>
        <input
          type="text"
          className="border rounded p-2"
          placeholder="Something"
        />
      </div>
      <h1 className="mx-4 mt-5 font-medium">
        This is a <span className="text-primary-500">Client</span> account
      </h1>
      <div className="text-center mx-5 w-11/12 mt-3">
        <button className="w-full border py-2 font-medium rounded">
          Close Account
        </button>
        <button
          onClick={() => handleClasses()}
          className="w-full py-2 bg-primary-500 text-white rounded font-medium mt-3"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
