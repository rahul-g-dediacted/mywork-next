import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";
import { GrLock } from "react-icons/gr";
import { MdOutlineEditNotifications } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { Url } from "../../../components/ui/interface";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";



export default function Account () {
  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-3/5 mx-auto bg-white mt-16 pt-10 rounded shadow text-gray-700">
      <Link href="/account/desktop/myInfo">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center">
          <div className="flex items-start">
            <AiOutlineUser className="text-2xl" />
            <h1 className="text-lg ml-4">My Info</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="/account/desktop/billingMethods">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center">
          <div className="flex items-start">
            <BiReceipt className="text-2xl" />
            <h1 className="text-lg ml-4">Billing Methods</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="/account/desktop/subscription">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center">
          <div className="flex items-start">
            <AiTwotoneCalendar className="text-2xl" />
            <h1 className="text-lg ml-4">Manage Subscription</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="/account/desktop/password">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center">
          <div className="flex items-start">
            <GrLock className="text-2xl" />
            <h1 className="text-lg ml-4">Passwords and Security</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="/account/desktop/notifications">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center">
          <div className="flex items-start">
            <MdOutlineEditNotifications className="text-2xl" />
            <h1 className="text-lg ml-4">Notification Settings</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="/account/desktop/feedback">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center mb-2">
          <div className="flex items-start">
            <BiLike className="text-2xl" />
            <h1 className="text-lg ml-4">Feedback</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <h1 className="pl-6 pt-8 border-t text-xl text-black font-semibold mb-2">
        Legal
      </h1>
      <Link href="../../privacy-page">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center mb-2">
          <div className="flex items-start">
            <MdOutlinePrivacyTip className="text-2xl" />
            <h1 className="text-lg ml-4">Privacy Policy</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
      <Link href="../../terms-page">
        <div className="flex justify-between hover:bg-primary-100 py-2 px-6 items-center mb-2">
          <div className="flex items-start">
            <MdOutlinePrivacyTip className="text-2xl" />
            <h1 className="text-lg ml-4">Terms of Service</h1>
          </div>
          <MdArrowForwardIos className="text-xl" />
        </div>
      </Link>
    </div>
          </main>
        </div>


    
    </>
  );
};