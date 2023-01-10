import Sidebar from "../../../components/ui/employer/desktop/sidebar";
import Navbar from "./navbar";

// export const Drafts = () => {
  export default function Drafts (){


  return(
    <div className="flex flex-row min-h-screen w-screen max-w-full bg-primary-50 font-sans font-medium">
    <Sidebar />
    <main className="flex-1 flex flex-col">
      <Navbar />
      <div>drafts</div>
    </main>
  </div>
  ) 
};
