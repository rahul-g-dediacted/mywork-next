import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';

const linkClassNames = cx(styles.link, { [styles.active]: true });


// export const Navbar = () => {
  export default function Navbar (){
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <div className="w-full">
      <h1 className="ml-10 text-xl font-semibold pt-5">New jobs</h1>
      <div className="mt-10 abs_border relative flex before:absolute before:h-[2px] before:w-full before:bg-gray-300 before:bottom-0">
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/ee/jobs/search" className={currentRoute === '/ee/jobs/search' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <MdWorkOutline className="mr-1" />
            Search
          </Link>
        </div>
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/ee/jobs/invite" className={currentRoute === '/ee/jobs/invite' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <RiUserAddLine className="mr-1" />
            Invites
          </Link>
        </div>
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/ee/jobs/accepted" className={currentRoute === '/ee/jobs/accepted' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <BiTimeFive className="mr-1" />
            Accepted
          </Link>
        </div>
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/ee/jobs/offer" className={currentRoute === '/ee/jobs/offer' ? cx(styles.link,  [styles.active]) : cx(styles.link,  [styles.nonActive])}>
            <MdWorkOutline className="mr-1" />
            Offers
          </Link>
        </div>
      </div>
    </div>
  );
};
