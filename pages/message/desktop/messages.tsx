import { AiOutlineSearch } from "react-icons/ai";
import Photo from "../../../public/assets/imgs/profile1.jpg";
// import { Link } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../sidebar";
// import Sidebar from "../../../components/ui/employee/desktop/sidebar";
// export const Messages = ({ url }: Url) => {
  export default function Messages (){

  return (
  <>
   <Sidebar />      
          <div className="w-[30%] h-screen overflow-y-auto">
      <div className="w-full shadow bg-white">
        <h1 className="font-medium p-3">Messages</h1>
      </div>
      <div className="px-4 py-2 relative text-[#575757]">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none border p-2 rounded"
        />
        <AiOutlineSearch className="absolute text-xl right-7 top-5" />
      </div>
      <div className="w-full px-4 py-3 bg-white shadow">
        <Link href="./chat">
          <div className="border-b-2 py-3 border-[#f9f9f9] flex justify-between">
            <div className="flex justify-start items-start">
              <div className="w-12 h-12  mr-1 relative rounded-full before:absolute before:w-2 before:h-2 before:bg-green-400 before:right-1 before:top-2 before:rounded-full">
                {/* <img
                  src={Photo}
                  alt=""
                  className="object-cover w-12 h-12 mt-2  rounded-full "
                /> */}
                <Image
                    src={Photo}
                    id="hide_side1"
                    className="object-cover w-12 h-12 mt-2  rounded-full"
                    alt="rofile Pic"
                  />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold">Goswami</h1>
                <p className="font-normal text-sm ">Job title</p>
                <p className="text-sm text-[#9e9e9e] ">
                  Last message extract,limit to one line
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <p className="text-[#9e9e9e] text-[12px]">23 jun 21</p>
              <p className="text-[10px] p-1 mt-1 w-fit bg-red-300 rounded-full">
                02
              </p>
            </div>
          </div>
        </Link>
        <Link href="./chat">
          <div className="border-b-2 py-3 border-[#f9f9f9] flex justify-between">
            <div className="flex justify-start items-start">
              <div className="w-12 h-12  mr-1 relative rounded-full before:absolute before:w-2 before:h-2 before:bg-green-400 before:right-1 before:top-2 before:rounded-full">
                {/* <img
                  src={Photo}
                  alt=""
                  className="object-cover w-12 h-12 mt-2  rounded-full "
                /> */}
                <Image
                    src={Photo}
                    id="hide_side1"
                    className="object-cover w-12 h-12 mt-2  rounded-full"
                    alt="rofile Pic"
                  />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold">Goswami</h1>
                <p className="font-normal text-sm ">Job title</p>
                <p className="text-sm text-[#9e9e9e] ">
                  Last message extract,limit to one line
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <p className="text-[#9e9e9e] text-[12px]">23 jun 21</p>
              <p className="text-[10px] p-1 mt-1 w-fit bg-red-300 rounded-full">
                02
              </p>
            </div>
          </div>
        </Link>
        <Link href="./chat">
          <div className="border-b-2 py-3 border-[#f9f9f9] flex justify-between">
            <div className="flex justify-start items-start">
              <div className="w-12 h-12  mr-1 relative rounded-full before:absolute before:w-2 before:h-2 before:bg-green-400 before:right-1 before:top-2 before:rounded-full">
                {/* <img
                  src={Photo}
                  alt=""
                  className="object-cover w-12 h-12 mt-2  rounded-full "
                /> */}
                <Image
                    src={Photo}
                    id="hide_side1"
                    className="object-cover w-12 h-12 mt-2  rounded-full"
                    alt="rofile Pic"
                  />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold">Goswami</h1>
                <p className="font-normal text-sm ">Job title</p>
                <p className="text-sm text-[#9e9e9e] ">
                  Last message extract,limit to one line
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <p className="text-[#9e9e9e] text-[12px]">23 jun 21</p>
              <p className="text-[10px] p-1 mt-1 w-fit bg-red-300 rounded-full">
                02
              </p>
            </div>
          </div>
        </Link>
        <Link href="./chat">
          <div className="border-b-2 py-3 border-[#f9f9f9] flex justify-between">
            <div className="flex justify-start items-start">
              <div className="w-12 h-12  mr-1 relative rounded-full before:absolute before:w-2 before:h-2 before:bg-green-400 before:right-1 before:top-2 before:rounded-full">
                {/* <img
                  src={Photo}
                  alt=""
                  className="object-cover w-12 h-12 mt-2  rounded-full "
                /> */}
                <Image
                    src={Photo}
                    id="hide_side1"
                    className="object-cover w-12 h-12 mt-2  rounded-full"
                    alt="rofile Pic"
                  />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold">Goswami</h1>
                <p className="font-normal text-sm ">Job title</p>
                <p className="text-sm text-[#9e9e9e] ">
                  Last message extract,limit to one line
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <p className="text-[#9e9e9e] text-[12px]">23 jun 21</p>
              <p className="text-[10px] p-1 mt-1 w-fit bg-red-300 rounded-full">
                02
              </p>
            </div>
          </div>
        </Link>
        <Link href="./chat">
          <div className="border-b-2 py-3 border-[#f9f9f9] flex justify-between">
            <div className="flex justify-start items-start">
              <div className="w-12 h-12  mr-1 relative rounded-full before:absolute before:w-2 before:h-2 before:bg-green-400 before:right-1 before:top-2 before:rounded-full">
                {/* <img
                  src={Photo}
                  alt=""
                  className="object-cover w-12 h-12 mt-2  rounded-full "
                /> */}
                 <Image
                    src={Photo}
                    id="hide_side1"
                    className="object-cover w-12 h-12 mt-2  rounded-full"
                    alt="rofile Pic"
                  />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold">Goswami</h1>
                <p className="font-normal text-sm ">Job title</p>
                <p className="text-sm text-[#9e9e9e] ">
                  Last message extract,limit to one line
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <p className="text-[#9e9e9e] text-[12px]">23 jun 21</p>
              <p className="text-[10px] p-1 mt-1 w-fit bg-red-300 rounded-full">
                02
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
          
       
    
    </>
  );
};
