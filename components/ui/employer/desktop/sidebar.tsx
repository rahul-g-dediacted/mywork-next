import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
// import { Link } from "react-router-dom";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import Logo from "../../../../public/app-icon-white.svg";
import ProfilePic from "../../../../public/assets/imgs/profile1.jpg";
import styles from "../../Navbar.module.css";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


const linkClassNames = cx(styles.link, { [styles.active]: true });

const handleFun = () => {
  const elements = document.querySelectorAll("#hide_side");
  elements.forEach((element) => {
    if (element.classList.contains("block")) {
      element.classList.add("hidden");
      element.classList.remove("block");
    }
  });
  if (document.querySelector("#hide_side")?.classList.contains("hidden")) {
    document.querySelector("#handle_side")?.classList.remove("w-[20%]");
    document.querySelector("#handle_side")?.classList.add("w-[4%]");
  } else {
    document.querySelector("#handle_side")?.classList.remove("w-[4%]");
    document.querySelector("#handle_side")?.classList.add("w-[20%]");
  }
};

const handleSize = () => {
  const elements = document.querySelectorAll("#hide_side");
  elements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("block");
    }
  });
  if (document.querySelector("#hide_side")?.classList.contains("hidden")) {
    document.querySelector("#handle_side")?.classList.remove("w-[20%]");
    document.querySelector("#handle_side")?.classList.add("w-[4%]");
  } else {
    document.querySelector("#handle_side")?.classList.remove("w-[4%]");
    document.querySelector("#handle_side")?.classList.add("w-[20%]");
  }
};

export default function Sidebar (){
  const router = useRouter();
const currentRouter = router.pathname;


  return (

    <div
      id="handle_side"
      className="min-h-screen w-[20%]  bg-primary-500 flex flex-col"
    >
      <div className="flex flex-row justify-between  pt-10 w-full">
        
<Image
      src={Logo}
      id="hide_side"
      className="text-white ml-6 w-32 block"
      alt="Picture of the author"
    />

<Image
      src={ProfilePic}
      className="rounded-full object-contain bg-white w-10 h-10 ml-[5px] mr-[5px]"
      alt="Picture of the author"
    />

      </div>
      <div className="nav_links flex flex-col items-start justify-center mt-16 w-full">
        <Link
          href="/er/skills/search"
          className={currentRouter.includes('/er/skills') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleSize()}
        >
          <CgProfile className="text-2xl" />
          <h1 id="hide_side" className="text-inherit text-xl pl-3 block">
            Skills
          </h1>
        </Link>
        <Link
          href="/er/jobs/myPosting"
          className={currentRouter.includes('/er/jobs') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleSize()}
        >
          <MdWork className="text-2xl" />
          <h1 id="hide_side" className="text-inherit text-xl pl-3 block">
            Jobs
          </h1>
        </Link>
        <Link
          href="/message-er/desktop/noMessage"
          className={currentRouter.includes('/message-er/desktop') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleFun()}
          
        >
          <MdOutlineMessage className="text-2xl" />
          <h1 id="hide_side" className="text-inherit text-xl pl-3 block">
            Message
          </h1>
        </Link>
        <Link
          href="/account-er/desktop/accounts"
          className={currentRouter.includes('/account-er/desktop') ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}
          onClick={() => handleSize()}
        >
          <MdOutlineManageAccounts className="text-3xl" />
          <h1 id="hide_side" className="text-inherit text-xl pl-3 block">
            Account
          </h1>
        </Link>
      </div>
    </div>
  );
};
