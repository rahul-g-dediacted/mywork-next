import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";
export default function Password () {
  const [classes, setClasses] = useState({ old: true, new: true, cNew: true });
  const [tip, setTip] = useState(true);
  const toggleTip = () => {
    setTip(!tip);
  };

  const handleClasses = (number: String) => {
    if (number === "old") {
      setClasses({
        ...classes,
        old: !classes.old,
      });
    } else if (number === "new") {
      setClasses({
        ...classes,
        new: !classes.new,
      });
    } else {
      setClasses({
        ...classes,
        cNew: !classes.cNew,
      });
    }
  };
  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full relative h-screen">
      <div
        onClick={() => toggleTip()}
        className={`absolute  w-full h-[100%] bg-[#00000036] top-0 left-0 z-10 ${
          tip === true ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`absolute top-40 w-[350px] left-[345px] rounded p-5 text-left bg-white z-20 ${
          tip === true ? "hidden" : ""
        }`}
      >
        <h1 className="text-sm">
          Use the following tips to make your password stronger:
        </h1>
        <div className="relative">
          <h1
            onClick={() => toggleTip()}
            className="font-bold text-xl cursor-pointer text-gray-500 absolute top-[-55px] right-[-5px]"
          >
            x
          </h1>
        </div>
        <ol className="text-sm">
          <li className="text-sm text-gray-500 py-2">
            make sure tour password is unique <br></br>Never reuse passwords.
          </li>
          <li className="text-sm text-gray-500 py-2">
            Avoid obvious choices (123456,password).
          </li>
          <li className="text-sm text-gray-500 py-2">
            Use special characters, ( &,$,#,etc).
          </li>
          <li className="text-sm text-gray-500 py-2">
            Use more than 8 characters
          </li>
        </ol>
      </div>
      <div className="flex items-center m-4">
        <Link href="/account/desktop/accounts">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">Password & Security</h1>
      </div>
      <div className="w-[400px] mt-10 mx-auto bg-white rounded shadow">
        <div className="px-6 py-5 border-b w-full">
          <h1 className="font-medium my-2">Old Password</h1>
          <div className="relative">
            <input
              type={`${classes.old === true ? "password" : "text"}`}
              className="text-gray-500 w-full outline-none rounded border px-2 py-2"
              id="password__visibility"
            />
            <p
              onClick={() => toggleTip()}
              className="text-xs text-red-400 mt-1 cursor-pointer"
            >
              Tips for creating new password
            </p>
            <AiOutlineEyeInvisible
              className="absolute right-2 top-3 cursor-pointer"
              onClick={() => handleClasses("old")}
            />
          </div>
        </div>
        <div className="px-6 py-5 w-full">
          <h1 className="font-medium my-2">New Password</h1>
          <div className="relative">
            <input
              type={`${classes.new === true ? "password" : "text"}`}
              className="text-gray-500 w-full outline-none rounded border px-2 py-2"
              id="password__visibility"
            />
            <AiOutlineEyeInvisible
              className="absolute right-2 top-3 cursor-pointer"
              onClick={() => handleClasses("new")}
            />
          </div>
        </div>
        <div className="px-6 w-full">
          <h1 className="font-medium my-2">Confirm New Password</h1>
          <div className="relative">
            <input
              type={`${classes.cNew === true ? "password" : "text"}`}
              className="text-gray-500 w-full outline-none rounded border px-2 py-2"
              id="password__visibility"
            />
            <AiOutlineEyeInvisible
              className="absolute right-2 top-3 cursor-pointer"
              onClick={() => handleClasses("cNew")}
            />
          </div>
        </div>
        <div className="flex items-center mx-6 py-3">
          <input type="checkbox" />
          <p className="ml-2 text-xs text-gray-700">
            All devices will be required to sign in with new password
          </p>
        </div>
        <div className="flex justify-center py-8">
          <button className="font-medium uppercase rounded border px-6 py-2 mr-3">
            Cancel
          </button>
          <button className="font-medium uppercase rounded bg-primary-500 text-white px-9 py-2">
            Save
          </button>
        </div>
      </div>
    </div>
          </main>
        </div>

    
    </>
  );
};
