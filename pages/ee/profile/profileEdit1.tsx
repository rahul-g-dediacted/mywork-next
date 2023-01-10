// import { Link } from "react-router-dom";
import Link from "next/link";
import Navbar from "../../../components/ui/employee/desktop/jobs/navbar";
import Sidebar from "../../../components/ui/employee/desktop/sidebar";
import "./Profile.module.css"
// export const ProfileEdit1 = () => {
  export default function ProfileEdit1 (){

  return (
    <>
    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
          <Sidebar />
          <main className="flex-1 flex flex-col">
          <div className="mx-auto w-[650px]">
      <div className="text-center w-[400px]">
        <h1 className="text-4xl mt-10 text-left font-semibold text-[#4a4a4a]">
        Welcome, Sana Smith
      </h1>
      <div className="w-full rounded shadow">
        <div className="flex flex-col bg-white mt-6  p-6">
          <h1 className="text-left text-xl font-semibold">Select Industry</h1>
          <select className="styled-select p-2 border mt-3 border-black text-xl rounded-[9px] w-full outline-none">
            <option value="Construction">Construction</option>
            <option value="webDeveloper">Web Developer</option>
            <option value="softwareEngineer">Software Engineer</option>
            <option value="webDesigner">Web Designer</option>
          </select>
          <div className="flex justify-between mt-6">
            <h1 className="text-left text-xl font-semibold">
              Price per hour :
            </h1>
            <div className="flex items-center pb-6 ">
              <input
                type="number"
                value="12"
                className="border outline-none border-[#77777773] rounded text-lg w-14 text-center mr-2 font-semibold"
              />
              <p>$ / hr</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white mt-[3px]  p-6 ">
          <h1 className="text-left text-xl font-semibold pt-5">About me</h1>
          <textarea
            placeholder="Previous experiences, companies worked for, etc.."
            className="w-full h-[150px] border border-primary-50 outline-none rounded text-sm p-2"
          ></textarea>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/ee/profile/profileEdit2"
          className="shadow  text-white py-3 px-14 rounded bg-primary-500 uppercase hover:bg-primary-400 cursor-pointer"
        >
          update
        </Link>
      </div>
      </div>
    </div>
          
          </main>
        </div>

    </>
  );
};
