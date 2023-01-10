import Link from "next/link";

// import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="text-center py-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Link
          className="text-blue-500 hover:text-blue-400 text-sm"
          href="/privacy-page"
        >
          Privacy
        </Link>
        <span>&bull;</span>
        <Link className="text-blue-500 hover:text-blue-400 text-sm" href="/terms-page">
          Terms
        </Link>
        <span>&bull;</span>
        <Link
          className="text-blue-500 hover:text-blue-400 text-sm"
          href="/support-page"
        >
          Support
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        Copyrights &copy; {new Date().getFullYear()} MyWork. All Rights Reserved
      </p>
    </footer>
  );
}
