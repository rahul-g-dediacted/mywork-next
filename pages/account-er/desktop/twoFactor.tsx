// import { Url } from "../../interface";
// import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";

export default function TwoFactor () {
  return (
    <div className="w-full">
      <div className="flex items-center m-4">
        <Link href="/account">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">Password & Security</h1>
      </div>
      <div className="w-[400px] mt-10 mx-auto bg-white rounded shadow">
        <div className="px-6 py-5 border-b w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-medium my-2">Password</h1>
            <div className="p-2 rounded-full bg-gray-200">
              <AiOutlineEdit />
            </div>
          </div>
          <input
            type="password"
            className="text-gray-500 w-full outline-none rounded border px-2 py-2"
          />
          <p className="text-[10px] mt-2">
            Choose a unique, strong password that's at least 8 characters long
          </p>
        </div>
        <div className="flex flex-col my-4 items-start mx-6">
          <h1 className="font-medium">Two-step verification options</h1>
          <p className="text-xs my-2 text-gray-400">
            Add extra layer of security to block unauthorized access and protect
            your account.
          </p>
          <h1 className="font-medium">Text Message</h1>
          <p className="text-xs my-2 text-gray-400">
            Recieve a 6-digit text message to confirm it's you.
          </p>
        </div>
        <div className="flex justify-center py-8">
          <button className="font-medium uppercase rounded bg-primary-500 text-white px-12 py-2">
            enable
          </button>
        </div>
      </div>
    </div>
  );
};
