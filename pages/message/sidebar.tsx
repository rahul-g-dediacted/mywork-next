import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
// import { Link } from "react-router-dom";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import Logo from "../../public/app-icon-white.svg";
import ProfilePic from "../../public/assets/imgs/profile1.jpg";
import styles from "../../components/ui/Navbar.module.css";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// const linkClassNames = ({ active }: { active: boolean }) =>
//   cx(styles.link, { [styles.active]: active });




const handleFun = () => {
  const elements = document.querySelectorAll("#hide_side1");
  elements.forEach((element) => {
    if (element.classList.contains("block")) {
      element.classList.add("hidden");
      element.classList.remove("block");
    }
  });
  if (document.querySelector("#hide_side1")?.classList.contains("hidden")) {
    document.querySelector("#handle_side1")?.classList.remove("w-[20%]");
    document.querySelector("#handle_side1")?.classList.add("w-[4%]");
  } else {
    document.querySelector("#handle_side1")?.classList.remove("w-[4%]");
    document.querySelector("#handle_side1")?.classList.add("w-[20%]");
  }
};

const handleSize = () => {
  const elements = document.querySelectorAll("#hide_side1");
  elements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("block");
    }
  });
  if (document.querySelector("#hide_side")?.classList.contains("hidden")) {
    document.querySelector("#handle_side1")?.classList.remove("w-[20%]");
    document.querySelector("#handle_side1")?.classList.add("w-[4%]");
  } else {
    document.querySelector("#handle_side1")?.classList.remove("w-[4%]");
    document.querySelector("#handle_side1")?.classList.add("w-[20%]");
  }
};

// export const Sidebar = () => {
  export default function Sidebar (){
const router = useRouter();
const currentRouter = router.pathname;


  // const { aspath } = useRouter()
  return (
    <div 
      id="handle_side1"
      className=" min-h-screen bg-primary-500 flex flex-col w-[4%]"
    >
      <div className="flex flex-row justify-between pt-10 w-full">
        <Image
          id="hide_side1"
          src={Logo}
          alt="myWork"
          className="hidden text-white ml-6 w-32"
        />
        <Image
          src={ProfilePic}
          alt="Profile Pic"
          className="rounded-full object-contain bg-white  w-10 h-10 ml-[5px] mr-[5px]"
        />
      </div>
      <div className="nav_links flex flex-col items-start justify-center mt-16 w-full">
        <Link
          href="/ee/profile/profileEdit1"
          // className={linkClassNames}
          // onClick={() => handleSize()}
          className={currentRouter.includes('/ee/profile') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          >
          <CgProfile className="text-2xl" />
          <h1 id="hide_side1" className="hidden text-inherit text-xl pl-3">
            Profile
          </h1>
        </Link>
        <Link
        
          href="/ee/jobs/search"
          className={currentRouter.includes('/ee/jobs') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleSize()}
          
        >
          <MdWork className="text-2xl" />
          <h1 id="hide_side1" className="text-inherit text-xl pl-3 hidden">
            Jobs
          </h1>
        </Link>
        <Link
          href="/message/desktop/noMessage"
          className={currentRouter.includes('/message/desktop')  ? cx(styles.link,  [styles.active])  : cx(styles.link,  [styles.nonActive])}
          
          // onClick={() => handleFun()}
        >
          <MdOutlineMessage className="text-2xl" />
          <h1 id="hide_side1" className="text-inherit text-xl pl-3 hidden">
            Message
          </h1>
        </Link>
        <Link
          href="/account/desktop/accounts"
          className={currentRouter.includes('/account/desktop') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleSize()}
        >
          <MdOutlineManageAccounts className="text-3xl" />
          <h1 id="hide_side1" className="text-inherit text-xl pl-3 hidden">
            Account
          </h1>
        </Link>
      </div>
    </div>
  );
};
