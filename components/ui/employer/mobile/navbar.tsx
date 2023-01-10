import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import styles from "./Navbar.module.css";
import cx from "classnames";

const linkClassNames = ({ isActive }: { isActive: boolean }) =>
  cx(styles.link, { [styles.active]: isActive });

export const Navbar = () => {
  return (
    <div className=" h-fit shadow border">
      <div className="flex justify-between px-2 pt-2">
        <NavLink to="/er/skills" className={linkClassNames}>
          <div className="flex flex-col items-center">
            <CgProfile className="text-xl" />
            <h1 className="font-medium">Skills</h1>
          </div>
        </NavLink>
        <NavLink to="/er/jobs" className={linkClassNames}>
          <div className="flex flex-col items-center">
            <MdWork className="text-xl" />
            <h1 className="font-medium">Jobs</h1>
          </div>
        </NavLink>
        <NavLink to="/er/message" className={linkClassNames}>
          <div className="flex flex-col items-center">
            <MdOutlineMessage className="text-xl" />
            <h1 className="font-medium">Message</h1>
          </div>
        </NavLink>
        <NavLink to="/er/account" className={linkClassNames}>
          <div className="flex flex-col items-center">
            <MdOutlineManageAccounts className="text-2xl" />
            <h1 className="font-medium">Account</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
