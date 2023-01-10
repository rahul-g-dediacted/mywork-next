import { BsChatDots } from "react-icons/bs";
// import Sidebar from "../../../components/ui/employee/desktop/sidebar";
import Messages from "./messages";

// export function NoMessage() {
  export default function NoMessage (){

  return (
    <>
<div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
         <Messages />
          <div className="flex-1 bg-[#ecf4ff]">
      <div className="w-[300px] mx-auto flex flex-col items-center text-center mt-60">
        <div className="w-fit flex justify-center p-6 bg-primary-500 rounded-full">
          <BsChatDots className="text-6xl text-white" />
        </div>
        <h1 className="mt-3 text-2xl font-semibold">No Messages Yet</h1>
        <p className="mt-2 text-[#4a4a4a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. tempora!
        </p>
      </div>
    </div>
        </div>
          
        
    </>
  );
}
