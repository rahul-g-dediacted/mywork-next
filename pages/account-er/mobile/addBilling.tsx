import { Url } from "../../interface";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export const MaddBilling = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Billing Methods</h1>
        <Link to={`/${url}/account/billing`}>
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="mx-auto  mt-6 pb-4">
        <div className="px-4 pb-4 border-b">
          <h1 className="text-lg font-medium  pt-6">Add Detail</h1>
          <input
            type="text"
            className="outline-none font-medium my-2 border py-3 px-4 text-sm rounded-lg w-full"
            placeholder="Card Number"
          />
          <input
            type="text"
            className="outline-none font-medium my-2 border py-3 px-4 text-sm rounded-lg w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="outline-none font-medium my-2 border py-3 px-4 text-sm rounded-lg w-full"
            placeholder="Last Name"
          />
        </div>
        <div className="mx-4 pb-4 flex flex-col">
          <h1 className="text-lg font-medium  pt-3">Expires On</h1>
          <div className="flex justify-between w-full mt-2 mb-2">
            <div className="flex flex-col overflow-hidden w-[35%] border  p-1 rounded-lg">
              <p className="px-2 text-xs">MM</p>
              <input
                type="number"
                className="w-full outline-none mx-2 text-sm"
              />
            </div>
            <div className="flex flex-col overflow-hidden w-[35%] border  p-1 rounded-lg">
              <p className="px-2 text-xs">YYYY</p>
              <input
                type="number"
                className="w-full outline-none mx-2 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden w-[65%] border p-1 rounded-lg">
            <p className="px-2 text-xs">YYYY</p>
            <input type="number" className="w-full outline-none mx-2 text-sm" />
          </div>
          <p className="text-xs p-1 text-gray-600 mb-2">(What's This?)</p>
          <div className="flex items-center">
            <input type="checkbox" />
            <p className="ml-2 text-sm text-gray-700">
              Save this card for faster checkout
            </p>
          </div>
          <div className="mx-auto w-2/4 mt-16">
            <button className="rounded uppercase bg-primary-500 py-2 w-full font-medium text-white">
              continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
