import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import cx from "classnames";
import Link from "next/link";
const linkClassNames = ({ isActive }: { isActive: boolean }) =>
  cx(styles.link, { [styles.active]: isActive });

// export const Navbar = () => {
  export default function Navbar (){


  return (
    <div className="w-full">
      <div className="mt-16 abs_border relative flex before:absolute before:h-[2px] before:w-full before:bg-gray-300 before:bottom-0">
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/er/skills/search" className="linkClassNames">
            <MdWorkOutline className="mr-1" />
            Skills
          </Link>
        </div>
        <div className="ml-[90px] text-gray-600 z-10">
          <Link href="/er/skills/saved" className="linkClassNames">
            <MdFavoriteBorder className="mr-1" />
            saved
          </Link>
        </div>
      </div>
    </div>
  );
};
