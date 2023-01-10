import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";

export const MbillingMethods = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Billing Methods</h1>
        <Link to={`/${url}/account/`}>
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className=" pb-4">
        <div className="flex justify-between border-b items-center py-3 px-5">
          <h1 className="text-lg font-medium text-gray-600">
            Add credit cards
          </h1>
          <Link
            to={`/${url}/account/addbilling`}
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
  );
};
