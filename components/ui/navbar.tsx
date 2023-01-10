import { useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Link from "next/link";
import cx from "classnames";

export function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <header className="flex items-center justify-between shadow px-12 py-4">
      <div>
        <Link href="/">
          <img className="block w-32" src={"/app-icon.svg"} alt="myWork" />
        </Link>
      </div>
      <nav className="flex text-sm items-center">
        <a
          className="hidden md:inline-block mx-3 my-1 p-1 hover:text-primary-500 transition duration-150"
          href="/employer-dashboard"
        >
          About
        </a>
        <a
          className="hidden md:inline-block mx-3 my-1 p-1 hover:text-primary-500 transition duration-150"
          href="#pricing"
        >
          Pricing
        </a>
        <Link
          className="hidden md:inline-block mx-3 my-1 p-1 hover:text-primary-500 transition duration-150"
          href="/login-page"
        >
          Login
        </Link>
        <Link
          className="mx-2 px-4 py-2 border rounded-2xl text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500 transition duration-150"
          href="/signup-page"
        >
          Sign up
        </Link>
        <div className="inline-block relative">
          <button
            className="inline-block md:hidden p-2 rounded-full bg-primary-100 hover:text-primary-500 transition duration-150"
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          >
            <FiMenu />
          </button>
          <div
            className={cx(
              "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none md:hidden",
              { hidden: !mobileMenuVisible }
            )}
          >
            <div className="py-1">
              <a href="/" className="text-gray-700 block px-4 py-2 text-sm">
                About
              </a>
              <a href="/" className="text-gray-700 block px-4 py-2 text-sm">
                Pricing
              </a>
              <Link
                href="/login"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
