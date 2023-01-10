import styles from "../Navbar.module.css";
import cx from "classnames";
import Link from "next/link";
const linkClassNames = cx(styles.link, { [styles.active]: true });

export default function Job () {
  return (
    <div className="flex flex-col w-full">
      <div className="mt-16 abs_border relative flex before:absolute before:h-[2px] before:w-full before:bg-gray-300 before:bottom-0">
        <div className="ml-[100px] text-[#9a9a9a] z-10">
          <Link href="/er/jobs/job/jobDescription" className={linkClassNames}>
            Job
          </Link>
        </div>
        <div className="ml-[90px] text-[#9a9a9a] z-10">
          <Link href="/er/jobs/job/jobInvite" className={linkClassNames}>
            Invite
          </Link>
        </div>
        <div className="ml-[90px] text-[#9a9a9a] z-10">
          <Link href="/er/jobs/job/jobApplications" className={linkClassNames}>
            Applications
          </Link>
        </div>
        <div className="ml-[90px] text-[#9a9a9a] z-10">
          <Link href="/er/jobs/job/jobHired" className={linkClassNames}>
            Hired
          </Link>
        </div>
      </div>
    </div>
  );
};
