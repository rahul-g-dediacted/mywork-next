import React from "react";
import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

export const MtwoFactor = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Password & Security</h1>
        <Link to={`/${url}/account/`}>
          <h1 className="text-2xl absolute top-2 text-white left-3">x</h1>
        </Link>
      </div>
      <div className=" mt-10 bg-white">
        <div className="px-6 py-5 border-b w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold my-2">Password</h1>
            <div className="p-2 rounded-full ">
              <AiOutlineEdit className="text-xl" />
            </div>
          </div>
          <input
            type="password"
            className="text-gray-500 w-full outline-none rounded border px-2 py-2"
          />
          <p className="text-sm mt-2">
            Choose a unique, strong password that's at least 8 characters long
          </p>
        </div>
        <div className="flex flex-col my-4 items-start mx-6">
          <h1 className="font-medium my-2">Two-step verification options</h1>
          <p className="text-xs my-2 text-gray-400">
            Add extra layer of security to block unauthorized access and protect
            your account.
          </p>
          <h1 className="font-medium my-2">Text Message</h1>
          <p className="text-xs my-2 text-gray-400">
            Recieve a 6-digit text message to confirm it's you.
          </p>
        </div>
        <div className="flex justify-center items-center py-8">
          <button className="font-medium uppercase rounded bg-primary-500 text-white w-3/4 py-2">
            enable
          </button>
        </div>
      </div>
    </div>
  );
};
