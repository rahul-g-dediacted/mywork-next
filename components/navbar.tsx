import { useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Link from "next/link";
import cx from "classnames";
import Image from "next/image";
import Logo from "../public/app-icon.svg"

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <header className="flex items-center  justify-between drop-shadow-sm shadow px-12 py-4 bg-gray-50">
      <div>
        <Link href="/">
          <Image className="block w-32" src={Logo} alt="next" />
        </Link>
      </div>
      <nav className="flex t</Navbar>ext-sm items-center text-sm font-medium">
        <a
          className="hidden md:inline-block mx-3 my-1 p-1 hover:text-primary-500 transition duration-150"
          href="/about-page"
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
              <a href="/" className="text-gray-700 block px-4 py-2 font-size: 0.875rem line-height: 1.25rem;">
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
