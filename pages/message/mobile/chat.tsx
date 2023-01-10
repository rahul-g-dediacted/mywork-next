import { ImAttachment } from "react-icons/im";
import Photo from "../../../assets/imgs/profile.jpg";
import { MdPhotoLibrary } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { Url } from "../../interface";
import { IoMdAdd } from "react-icons/io";

export const Mchat = ({ url }: Url) => {
  return (
    <div className="w-full">
      <div className="flex flex-col h-screen  justify-between relative">
        <div className="flex flex-col">
          <div className="w-full bg-primary-500 h-[11vh] z-20">
            <div className="flex items-center">
              <Link to={`/${url}/message`}>
                <MdArrowBackIosNew className="text-2xl text-white  ml-2" />
              </Link>
              <div className="flex justify-start py-5 px-3">
                <img
                  src={Photo}
                  className="w-12 h-12 object-cover rounded-full"
                  alt="Profile Pic"
                />

                <div className="ml-2">
                  <p className="font-semibold text-white">Goswami</p>
                  <p className="text-[12px] text-white">6:43AM GMT+ 5:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto relative h-[76vh]  w-full">
            <div
              id="translate_menu"
              className="absolute hidden top-0 left-0 w-full bg-transparent h-[100%]  z-10"
            ></div>
            <div className="py-8 px-14 ">
              <div className="relative flex flex-wrap justify-end before:absolute before:border-[10px] before:border-l-transparent before:border-b-transparent before:left-[-17px] before:top-0 before:border-[#e8e8e8]  px-3 py-1  rounded max-w-[200px] items-center bg-[#e8e8e8] w-fit z-20">
                <h1>Lorem ipsum dolor dasd sad sit.</h1>
                <p className="text-[12px] ml-2 text-[#b7b4b4]">2:55 PM</p>
              </div>
            </div>
            <div className="py-4 px-14 ">
              <div className="relative before:absolute before:border-[10px] flex flex-wrap justify-end before:border-r-transparent before:border-b-transparent before:right-[-17px] before:top-0 before:border-[#d7e9f7] float-right px-3 py-1 rounded max-w-[200px] items-center bg-[#d7e9f7] w-fit">
                <h1>Lorem ipsum dolor dasd sad sit.</h1>
                <p className="text-[12px] ml-2 text-[#b7b4b4]">2:55 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white w-full items-center shadow h-[11vh] justify-center px-2 relative">
          <div
            id="attach_menu"
            className="absolute hidden left-4 shadow rounded bottom-[86px] bg-white flex flex-col p-2"
          >
            <div className="flex items-center py-2 border-b">
              <div className=" rounded-full  p-2 bg-[#ff521e] mr-2">
                <MdPhotoLibrary className="text-xl  text-white" />
              </div>
              <div>
                <h1 className="font-semibold py-2">Photo Library</h1>
              </div>
            </div>
            <div className="flex items-center py-2 border-b">
              <div className=" rounded-full  p-2 bg-[#2e91f7] mr-2">
                <MdOutlinePhotoCamera className="text-xl  text-white" />
              </div>
              <div>
                <h1 className="font-semibold py-2">Take Photo</h1>
              </div>
            </div>
            <div className="flex items-center py-2 ">
              <div className=" rounded-full  p-2 bg-[#5f66cd] mr-2">
                <CgFileDocument className="text-xl  text-white" />
              </div>
              <div>
                <h1 className="font-semibold py-2">Document</h1>
              </div>
            </div>
          </div>
          <div className=" p-2 cursor-pointer rounded-full">
            <IoMdAdd
              onClick={() => {
                document
                  .getElementById("attach_menu")
                  ?.classList.toggle("hidden");
              }}
              className=" text-[#ff521e] text-2xl"
            />
          </div>
          <div className="mx-2 text-left  w-full">
            <input
              type="text"
              placeholder="Type a message"
              className="text-sm border rounded-xl outline-none w-full p-2"
            />
          </div>
          <div className="bg-primary-500 p-2 cursor-pointer rounded-full">
            <IoMdSend className="text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};
