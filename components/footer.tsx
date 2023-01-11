// import { Link } from "react-router-dom";\
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <a
          className="text-blue-500 hover:text-blue-400 text-sm"
          href="/privacy-page"
        >
          Privacy
        </a>
        <span>&bull;</span>
        <a className="text-blue-500 hover:text-blue-400 text-sm" href="/terms-page">
          Terms
        </a>
        <span>&bull;</span>
        <a
          className="text-blue-500 hover:text-blue-400 text-sm"
          href="/support-page"
        >
          Support
        </a>
      </div>
      <p className="text-sm text-gray-500">
        Copyrights &copy; {new Date().getFullYear()} MyWork. All Rights Reserved
      </p>
    </footer>
  );
}
