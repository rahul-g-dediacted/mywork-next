import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export const MEEjobdescription = () => {
  return (
    <div className="w-full">
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Job description</h1>
        <Link to="/ee/jobs/search">
          <MdArrowBackIosNew className="text-2xl absolute top-3 text-white left-3" />
        </Link>
      </div>
      <div className="mx-5">
        <div className="flex flex-col py-3 items-start border-b">
          <h1 className="font-medium text-lg">Job title, 50 character space</h1>
          <div className="flex items-center text-gray-500">
            <BiTimeFive className="" />
            <p className="text-sm ml-1 mt-1">Posted 10 hours ago</p>
          </div>
        </div>
        <div className="flex flex-col py-3 items-start border-b">
          <h1 className="font-medium text-lg">Job Description</h1>
          <p className="text-sm mt-1 text-gray-500">
            Some job Description, max of 200 word
          </p>
        </div>
        <div className="flex flex-col py-3 items-start border-b">
          <h1 className="font-medium text-lg">Location</h1>
          <div className="flex items-center text-gray-500">
            <GoLocation />
            <p className="text-sm ml-1 mt-1">
              Tuas south, street1{" "}
              <span className="ml-2 text-primary-600">(show map)</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between border-b">
          <div className="flex flex-col py-3 items-start ">
            <h1 className="font-medium text-lg">Start Date</h1>
            <div className="flex items-center text-gray-500">
              <BsCalendarDate />
              <p className="text-sm ml-1 mt-1">12-jun-2021</p>
            </div>
          </div>
          <div className="flex flex-col py-3 items-start">
            <h1 className="font-medium text-lg">Duration</h1>
            <p className="text-sm ml-1 mt-1 text-left text-gray-500">
              1 Day(s)
            </p>
          </div>
        </div>
        <div className="flex justify-between border-b">
          <div className="flex flex-col py-3 items-start ">
            <h1 className="font-medium text-lg text-left">Contact Person</h1>
            <p className="text-sm ml-1 mt-1 text-gray-500">Sudhakar</p>
          </div>
          <div className="flex flex-col py-3 items-start">
            <h1 className="font-medium text-lg">Mobile</h1>
            <p className="text-sm ml-1 mt-1 text-left text-gray-500">
              +65-8259 2141
            </p>
          </div>
        </div>
        <div className="flex flex-col py-3 items-start border-b">
          <h1 className="font-medium text-lg">Location</h1>
          <p className="text-sm ml-1 mt-1 text-gray-500">
            15 $/hour <span className="ml-3"> 200 $ (Lumpsum)</span>
          </p>
        </div>
        <div className="flex flex-col py-3 items-start border-b">
          <h1 className="font-medium text-lg">Client Ratings</h1>
          <div className="flex mt-1">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiOutlineStar className="text-yellow-400" />
          </div>
        </div>
        <div className="flex justify-between py-3 items-start border-b">
          <div className=" flex flex-col">
            <h1 className="font-medium text-lg">Feedbacks</h1>
            <p className="text-sm ml-1 mt-1 text-gray-500">
              Very pleasent working atmosphere. well<br></br> spoken client.
              will work with him again
            </p>
          </div>
          <div className="flex mt-1">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiOutlineStar className="text-yellow-400" />
          </div>
        </div>
        <div className="flex flex-col items-center my-3">
          <button className="text-white bg-primary-500 rounded font-medium uppercase px-3 py-2">
            apply to job
          </button>
        </div>
      </div>
    </div>
  );
};
