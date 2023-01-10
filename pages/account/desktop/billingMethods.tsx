
// import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiVisaLine } from "react-icons/ri";
import Link from "next/link";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";

export default function BillingMethods  () {
  return (
    <>

<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="w-full">
      <div className="flex items-center m-4">
        <Link href="/account/desktop/accounts">
          <HiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold ml-2 ">Billing Method</h1>
      </div>
      <div className="w-[350px] mx-auto rounded shadow bg-white mt-12 pb-4">
        <div className="flex justify-between items-center py-6 mx-5 border-b">
          <h1 className="text-lg text-gray-600">Add credit cards</h1>
          <Link
            href="/account/desktop/addBilling"
            className="text-4xl text-gray-500"
          >
            +
          </Link>
        </div>
        <div className="m-4 p-3 rounded border">
          <h1>Primary</h1>
          <div className="flex justify-between items-center">
            <div className="flex mt-3">
              <div className="px-2 border h-fit mt-1 mr-2">
                <RiVisaLine className="text-2xl text-blue-800" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs">Somename</p>
                <p className="text-xs text-gray-400">XXXX XXXX XXXX 1234</p>
                <p className="text-xs text-[9px] text-gray-400">12/2026</p>
              </div>
            </div>
            <h1 className="font-semibold">USD</h1>
          </div>
        </div>
        <div className="m-4 p-3 rounded border">
          <h1>Primary</h1>
          <div className="flex justify-between items-center">
            <div className="flex mt-3">
              <div className="px-2 border h-fit mt-1 mr-2">
                <RiVisaLine className="text-2xl text-blue-800" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs">Somename</p>
                <p className="text-xs text-gray-400">XXXX XXXX XXXX 1234</p>
                <p className="text-xs text-[9px] text-gray-400">12/2026</p>
              </div>
            </div>
            <h1 className="font-semibold">SGD</h1>
          </div>
        </div>
      </div>
    </div>
          </main>
        </div>
    </>
  );
};
