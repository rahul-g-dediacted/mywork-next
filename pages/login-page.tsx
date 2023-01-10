import FormField from "../components/ui/forms/form-field";
import Button from "../components/ui/button";
import Link from "next/link";
// import "../styles/landing-page.css"
// import facebookIcon from "";
// import phoneIcon from "../assets/imgs/phone-icon.svg";
// import googleIcon from "../assets/imgs/google-icon.svg";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="mb-4">
          <img src="/app-icon.svg" alt="my-work" />
        </div>
        <form className="w-full md:w-1/3 lg:w-3/12">
          <FormField id="email" label="Email / Phone Number" />
          <FormField id="password" label="Password" />
          <div className="flex justify-center mt-6">
            <Button>LOGIN</Button>
          </div>
          <div className="text-center mt-6 text-sm">
            <span>OR</span>
          </div>
          <div className="flex justify-center items-center gap-3 mt-6">
            <button>
              <img src={"/facebook-icon.svg"} alt="" className="block w-10" />
            </button>
            <button>
              <img src={"/phone-icon.svg"} alt="" className="block w-10" />
            </button>
            <button>
              <img src={"/google-icon.svg"} alt="" className="block w-10" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-6">
            <p>Don't have account?</p>
            <Link
              href="/signup-page"
              className="text-primary-500 hover:text-primary-400"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
