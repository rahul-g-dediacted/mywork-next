// import { Link } from "react-router-dom";
import RadioButton from "../components/ui/forms/radio-button";
import RadioGroup from "../components/ui/forms/radio-group";
import FormField from "../components/ui/forms/form-field";
import Button from "../components/ui/button";
import Link from "next/link";
// import facebookIcon from "../assets/imgs/facebook-icon.svg";
// import phoneIcon from "../assets/imgs/phone-icon.svg";
// import googleIcon from "../assets/imgs/google-icon.svg";

export default function SignUpPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="mb-4">
          <img src="/app-icon.svg" alt="my-work" />
        </div>
        <form className="w-full md:w-1/3 lg:w-3/12">
          <FormField id="username" label="Username" />
          <FormField id="email" label="Email / Phone Number" />
          <FormField id="password" label="Password" />
          <RadioGroup title="Register As"> 
            <RadioButton
              id="freelance"
              name="role"
              label="Freelance"
              value="freelance"
              onChange={() => 0}
              checked
            />
            <RadioButton
              id="employer"
              name="role"
              label="Employer"
              value="employer"
              onChange={() => 0}
            />
          </RadioGroup>
          <div className="flex justify-center mt-6">
            <Button>REGISTER</Button>
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
            <p>Have an account?</p>
            <Link
              href="/login-page"
              className="text-primary-500 hover:text-primary-400"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


// import { Link } from "react-router-dom";
// import Link from "next/link";
// import RadioButton from "./ui/forms/radio-button";
// import RadioGroup from "./ui/forms/radio-group";
// import FormField from "./ui/forms/form-field";
// import Button from "./ui/button";
// import { Form } from "react-router-dom";

// import facebookIcon from "./assets/imgs/facebook-icon.svg";
// import facebookIcon from "../pages/assets/imgs/facebook-icon.svg";

// import phoneIcon from "../pages/assets/imgs/phone-icon.svg";
// import googleIcon from "../pages/assets/imgs/google-icon.svg";

// export default function SignUpPage() {
//   return (
  
//     <div className="flex h-screen bg-gray-100">
//       <div className="flex flex-col justify-center items-center flex-1 px-4">
//         <div className="mb-4">
//           <img src="/app-icon.svg" alt="my-work" />
//         </div>
//         <form className="w-full md:w-1/3 lg:w-3/12"/>
//           <FormField id="username" label="Username" />
//           <FormField id="email" label="Email / Phone Number" />
//           <FormField id="password" label="Password" />
//           <RadioGroup title="Register As">
//             <RadioButton
//               id="freelance"
//               name="role"
//               label="Freelance"
//               value="freelance"
//               onChange={() => 0}
//               checked
//             />
//             <RadioButton
//               id="employer"
//               name="role"
//               label="Employer"
//               value="employer"
//               onChange={() => 0}
//             />
//           </RadioGroup>
//           <div className="flex justify-center mt-6">
//             <Button>REGISTER</Button>
//           </div>
//           <div className="text-center mt-6 text-sm">
//             <span>OR</span>
//           </div>
//           <div className="flex justify-center items-center gap-3 mt-6">
//             <button>
//               <img src={"/facebook-icon.svg"} alt="" className="block w-10" />
//             </button>
//             <button>
//               <img src={"/phone-icon.svg"} alt="" className="block w-10" />
//             </button>
//             <button>
//               <img src={"/google-icon.svg"} alt="" className="block w-10" />
//             </button>
//           </div>
//           </div>
//           <div className="flex justify-center items-center gap-2 mt-6">
//             <p>Have an account?</p>
//             <Link
//               href="/login"
//               className="text-primary-500 hover:text-primary-400"
//             >
//               Login
//             </Link>
//             </div>
//         {/* </form> */}
//       </div>

//   );
// }
