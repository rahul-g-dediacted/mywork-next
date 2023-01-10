import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { MdWorkOutline } from "react-icons/md";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import cx from "classnames";
import { useRouter } from "next/router";


const linkClassNames = cx(styles.link, { [styles.active]: true });

// export const Navbar = () => {
  export default function Navbar (){

    const router = useRouter();
    const currentRouter = router.pathname;

  return (
    <div className="w-full">
      <div className="mt-16 abs_border relative flex before:absolute before:h-[2px] before:w-full before:bg-gray-300 before:bottom-0">
        <div className="ml-[90px] text-sm text-gray-400 z-10">
          <Link href="/er/jobs/myPosting" className={currentRouter === '/er/jobs/myPosting' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <BsFileEarmarkSpreadsheet className="mr-1" />
            My Posting
          </Link>
        </div>
        <div className="ml-[90px] text-sm text-gray-400 z-10">
          <Link href="/er/jobs/drafts" className={currentRouter === '/er/jobs/drafts' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <HiOutlineMailOpen className="mr-1" />
            Drafts
          </Link>
        </div>
        <div className="ml-[90px] text-sm text-gray-400 z-10">
          <Link href="/er/jobs/hired" className={currentRouter === '/er/jobs/hired' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <MdWorkOutline className="mr-1" />
            Hired
          </Link>
        </div>
      </div>
    </div>
  );
};
