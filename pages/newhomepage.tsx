import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import cx from "classnames";
import Head from "next/head";
import Script from "next/script";
// import "../styles/globals.css";
// import "../styles/landing-page.css";
import people1 from "../public/assets/imgs/people1.png"
import people2 from "../public/assets/imgs/people2.png"
import people3 from "../public/assets/imgs/people3.png"
import people4 from "../public/assets/imgs/people4.png"
import blog1 from "../public/assets/imgs/blog1.png"
import blog2 from "../public/assets/imgs/blog2.png"
import blog3 from "../public/assets/imgs/blog3.png"
import image3 from "../public/assets/imgs/sunset.png"
import waves from "../public/assets/imgs/waves.png"
import image4 from "../public/assets/imgs/image4.png"
import image5 from "../public/assets/imgs/image5.png"
import profile from "../public/assets/imgs/profile.png"
import googlepay from "../public/playstore.png" 
import appstore from "../public/applestore.png"
import first from "../public/firstimg.png"

import Image from "next/image";
import Navbar from "../components/navbar";
export default function LandingPage() {
  return (
    <div className="bg-gray-50 font-medium">
      <Navbar/>
      <HeroSection />
      <AnalyticsSection />
      <WorkersSection />
      <JobPostingSection />
      <CommunicationSection />
      <DownloadApp />
      <Industry/>
      <Clienttest/>
      <PricingSection />
      {/* <Frequently/> */}
      <DownloadSection />
    </div>
  );
}

function HeroSection() {
  return (
    
    <section
    id="hero"
    className="flex justify-center items-center py-16 container mx-auto"
  >
            <div className="flex items-center md:gap-10  lg:justify-between">

   <div className="w-1/2 md:w-full pl-10 lg:pl-4 md:pl-0 sm:mb-10 ">
          <h1 className="font-extrabold	 text-[39px]  text-[#0E0E0E] dark:text-[#0E0E0E]">
          A Marketplace Built to Connect 
          <br />
          Skilled Workers and Recruiters!
          </h1>
          <p className="mt-6 text-[#7B93AC] dark:text-[#7B93AC]">Find the right people for any skilled job or find the perfect recruiters for your skills with our simple, no-fuss marketplace.</p>
          <div className=" flex mt-6  ">
          <button type="button" className=" mt-6 text-white bg-[#2B71D4]  focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get  Started for free
        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="" >
     
            <button className=" mt-6 flex text-[#5F6368] dark:text-[#0E0E0E] py-2 px-7 ">
            <Image
            src={googlepay}
            alt="OUR Teammate Picture"
            width={25}
            height={35}
          /> &nbsp;
              Google Pay</button>
            </div>
            <button className=" mt-6 flex text-[#5F6368] dark:text-[#0E0E0E] py-2 px-5 ">
            <Image
            src={appstore}
            alt="OUR Teammate Picture"
            width={25}
            height={35}
          />&nbsp;
              App Store
            </button>
            {/* <button className="text-[#377DFF] dark:text-[#E2E2E2] inline-flex gap-2 border-[1.5px] border-[#377DFF] dark:border-[#E2E2E2] items-center py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)]">
              <AiOutlinePlayCircle className="text-[22px] " />
              Our Story
            </button> */}
          </div>
          </div>
          <div className="before:animate-wiggle1 after:animate-wiggle1 w-[42%] md:w-auto   md:mb-10 text-center relative before:content-[''] before:absolute before:-left-4 before:-top-4 before:bg-[url('/svg/orange_pattern.svg')]  before:w-[100px] before:h-[80px] before:bg-no-repeat after:bg-[url('/svg/purple_pattern.svg')] after:absolute after:content-[''] after:-right-6 after:w-[100px] after:h-[80px] after:bg-no-repeat after:-bottom-6 after:-z-10">
          <Image
            src={first}
            alt="OUR Teammate Picture"
            width={565}
            height={402}
          />
        </div>
        </div>
   </section>
  );
}

function AnalyticsSection() {
  return (
    <section
      id="workers"
      // className="flex flex-col justify-center items-center py-16"
      className="flex items-center justify-center preview-card container"

    >
      <div className="w-full md:w-1/2 max-w-md"></div>
      <div className="text-left py-10">
      <button type="button" className="w-[170px] font-semibold mb-3 text-[20px] text-[#2B71D4] bg-primary-100 rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#2E93F7]">For Employers</button>
      
        <h1 className="text-3xl font-bold  mb-3 truncate text-[#2E2E2E] text-[38px] mt-10">
          Online Hiring Marketplace - test </h1>
        <h1 className="text-3xl  mb-5	 truncate text-[#2E2E2E] mt-4 font-normal	">
          Find the <span className="font-bold	">Top 1% </span>of Skilled talent on <span className="font-bold	">MyWork</span></h1>

          <div className="mt-12 text-[#777777] font-semibold	text-[16px]">
        <p className="mb-2 relative px-8 py-2 block item">Access skilled workers to fill your work gap</p>
        <p className="mb-2 relative px-8 py-2 block item">Quality of professionals promised with reviews, verification, test results.</p>
        <p className="mb-2 relative px-8 py-2 block item">Overall package development for corporate industries with no brokerage fees</p>
        <p className="mb-2 relative px-8 py-2 block item">Flexibility to book any time with a hassle free process</p>
        <p className="mb-2 relative px-8 py-2 block item">Live tracker to track wherein your workman is.</p>
        <p className="mb-2 relative px-8 py-2 block item">Speedy Service and direct communication with workers.</p>
        <p className="mb-2 relative px-8 py-2 block item">Access to discussion forum, to get more than one opinion.</p>
        </div>
      </div>
      <img
        className="block max-w-xs md:max-width: 28rem;;"
        src={"/assets/imgs/image.png"}
        alt="myWork"
      />
    </section>
  );
}

function WorkersSection() {
  return (
    <section
      // className="flex flex-col justify-center items-center py-16"
      className="flex items-center justify-center preview-card container"

    >
      <div className="w-full md:w-1/2 max-w-md"></div>
      <img
        className="block w-[500px] px-[30px]"
        src={"/assets/imgs/image1.png"}
        alt="myWork"
      />
      <div className="">
      <button type="button" className="w-[170px] font-semibold mb-3  text-[#EB5B2E] bg-red-100 rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#2E93F7]">For Skilled Workers</button>

        <h1 className=" mt-6 text-3xl  mb-5	 truncate font-bold">For Skilled Workers</h1>
        <h1 className="text-3xl  mb-5	 truncate">Find Work Suited to your Skills on</h1>
        <h1 className="text-3xl  mb-5	 truncate font-bold">MyWork</h1>
        <div>
        <p className="mb-5 relative px-8 py-2 block item">Job Security - Direct access to Marketplace</p>
        <p className="mb-5 relative px-8 py-2 block item">Flexibility to work as you are available.</p>
        <p className="mb-5 relative px-8 py-2 block item">Proof of work to showcase to employers.</p>
        <p className="mb-5 relative px-8 py-2 block item">Additional revenue stream as daily payment.</p>
        <p className="mb-5 relative px-8 py-2 block item">Industrial opportunity and skill development campaigns.</p>
        </div>
      </div>
    </section>
    
  );
}

function JobPostingSection() {
  return (
    <section
      id="job-posting"
      className="flex items-center justify-center preview-card"
    >
      <div className="flex flex-wrap  bg-gray-100 items-center py-16 rounded-3xl container p-10">
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-3xl text-[#0E0E0E] font-bold	 ">
            Product tour?
          </h1>
          <p className="text-[#777777] w-[651px] font-semibold	text-[23px]">
            Want to see Mywork in action? Check out our explainer<br/> video</p>
        </div>
        <button type="button" className="text-[#0E294F] bg-slate-100 border-[1.5px] border-[#0E0E0E] font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex ml-[300px] ">
          See the Video Here
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </section>
  );
}

function CommunicationSection() {
  return (
    <section className=" justify-center mx-auto my-40">
      
    <h1 className="text-center leading-10	mb-10 text-2xl text-[#000000] dark:text-[#000000] font-Quicksand font-semibold	sm:text-[40px]">
    Why Use the MyWork App?
    </h1>
  

    <div className="justify-center w-full md:w-auto"> 
    <Image
             src={image3}
             alt="props"
             className="content-center h-1/2	max-w-full	mr-auto	ml-auto	"
             />
    </div>

    <div className="flex gap-10 mt-28	ml-[100px] justify-center relative after:bg-[url('/svg/blue_pattern.svg')] after:absolute after:content-['']  after:w-[100px] after:h-[80px] after:animate-wiggle1 after:bg-no-repeat after:-bottom-[50px] after:right-0 after:-z-10 after:rotate-[20deg] container  ">
    <div className="">
           <div className="justify-center">
            <Image
             src={blog1}
             alt="props"
             className="h-[40px] w-[40px]"
             />
           </div>
            <h1 className="mt-6">Easier to Communicate</h1>
            <p className="text-[#7B93AC] dark:text-[#7B93AC] text-lg sm:text-[14px] font-semibold	 mt-3">
            With MyWork, there is no language or time barrier, hence making your communication easier and smoother          </p>
        </div>
        <div className="">
        <Image
             src={blog2}
             alt="props"
             className="h-[40px] w-[40px]"
             />
            <h1 className="mt-6">Cost-Effective</h1>
            <p className="text-[#7B93AC] font-semibold	 dark:text-[#7B93AC] text-lg sm:text-[14px]  mt-3">
            Significantly decrease your hiring spend with MyWork's cost-effective plans          </p>
        </div>
        <div className="">
        <Image
             src={blog3}
             alt="props"
             className="h-[40px] w-[40px]"
             />
            <h1 className="mt-6">Easy-to-Use and Manage</h1>
          
            <p className="text-[#7B93AC] dark:text-[#7B93AC] text-lg sm:text-[14px] font-semibold	 mt-3">
            Get full control of your entire hiring strategy and start making better decisions.          </p>
        </div>
        {/* <div className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#ffffff]  bg-white">
        <Image
             src={people4}
             alt="props"
             className="h-[77px] w-[77px]"
             />
            <h1>Semi-skilled workers</h1>
            
            <p className="text-[#3F4B58] dark:text-[#3F4B58] text-lg sm:text-[14px] font-normal mt-3">
            Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.

          </p>
        </div> */}
      
    </div>
    {/* <div className="justify-center w-full md:w-auto"> 
    <Image
             src={waves}
             alt="props"
             className="content-center h-1/2	max-w-full	mr-auto	ml-auto	"
             />
    </div> */}
  </section>
  );
}
function DownloadApp() {
  return (
    <section className="container flex mx-auto my-40 px-6">
       <div className="basis-1/3">
            <Image 
      src={image4}
      id="hide_side"
      className=" text-[#0E0E0E]"
      alt="Picture of the author"
    />
            </div>
            <div className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-wider">
        Download the App Now
        </h1>
        <p className=" mt-6 ">Signup today, for free, and start distributing jobs immediately. No lengthy onboarding or sales calls needed. </p>
        <button type="button" className=" mt-6 text-[#2441A1] border-2 border-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Download Now
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className="basis-1/3">
      <Image 
      src={image5}
      id="hide_side"
      className=" text-[#0E0E0E]"
      alt="Picture of the author"
    />
</div>
    
  </section>
  );
}
function Industry() {
  return (
<section className="container mx-auto my-40 px-6">
    <h1 className="text-center leading-10	 text-2xl text-[#000000] dark:text-[#000000] font-Quicksand font-semibold	sm:text-[40px]">
      My Work For every industry
    </h1>
    <h2 className="text-center text-[55px] mt-6	sm:text-[24px] text-[#7B93AC] dark:text-[#7B93AC] font-bold my-5 sm:my-0 relative after:bg-[url('/svg/blue_pattern.svg')] after:absolute after:content-[''] after:animate-rotate after:w-[100px] after:h-[80px] after:bg-no-repeat after:-top-[100px] after:left-0 after:-z-10 after:rotate-[20deg]">
    Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.
    </h2>
    <div className="flex gap-10 mt-28	 justify-center relative after:bg-[url('/svg/blue_pattern.svg')] after:absolute after:content-['']  after:w-[100px] after:h-[80px] after:animate-wiggle1 after:bg-no-repeat after:-bottom-[50px] after:right-0 after:-z-10 after:rotate-[20deg] ">
    
    <div className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#ffffff]  bg-white">
           <div className="justify-center">
            <Image
             src={people1}
             alt="props"
             className="h-[77px] w-[77px]"
             />
           </div>
            <h1>Commercial Workers</h1>
            <p className="text-[#3F4B58] dark:text-[#3F4B58] text-lg sm:text-[14px] font-normal mt-3">
            Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.
          </p>
        </div>
        <div className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#ffffff]  bg-white">
        <Image
             src={people2}
             alt="props"
             className="h-[77px] w-[77px]"
             />
            <h1>Industrial workers</h1>
            <p className="text-[#3F4B58] dark:text-[#3F4B58] text-lg sm:text-[14px] font-normal mt-3">
            Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.
          </p>
        </div>
        <div className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#ffffff]  bg-white">
        <Image
             src={people3}
             alt="props"
             className="h-[77px] w-[77px]"
             />
            <h1>Residential workers</h1>
          
            <p className="text-[#3F4B58] dark:text-[#3F4B58] text-lg sm:text-[14px] font-normal mt-3">
            Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.
          </p>
        </div>
        <div className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#ffffff]  bg-white">
        <Image
             src={people4}
             alt="props"
             className="h-[77px] w-[77px]"
             />
            <h1>Semi-skilled workers</h1>
            <p className="text-[#3F4B58] dark:text-[#3F4B58] text-lg sm:text-[14px] font-normal mt-3">
            Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.

          </p>
        </div>
      
    </div>
    
  </section>
  );
}
function Clienttest(){
  return(

  
  <section className="container justify-center flex mx-auto my-40 px-6">
       
  <div className="text-center py-10">
<h1 className="text-4xl font-bold tracking-wider">
Client Testimonials
</h1>
<p className="mt-6">Signup today, for free, and start distributing jobs immediately. No lengthy onboarding or sales calls needed. </p>
{/* <div className="mt-6 gap-x-6 flex justify-center">
<Image
   src={profile}
   alt="props"
   className="h-[77px] w-[77px]"
   />
   <h1 className="mt-4 text-[#566576] font-semibold	">m.k Jerry</h1>
   <p>Ux designer</p>

   </div>
</div> */}
<div className="mt-6 gap-x-6 flex items-center justify-center gap-10">
<Image
   src={profile}
   alt="props"
   className="h-[77px] w-[77px]"
   />
    <div>
       <h3 className="text-[#566576] dark:text-[#566576] text-xl sm:text-[18px] font-semibold">
       m.k Jerry
      </h3>
      <h5 className="text-[#566576] dark:text-[#566576] text-[11px] font-Quicksand ">
      Ux designer
      </h5>
    </div>
  </div>
</div>


</section>
);
}
/* function Industry() {
  return (
    <section
      id="communication"
      className="flex items-center justify-center preview-card my-16"
    >
      <div className="w-full md:w-1/2 max-w-md ">
          <div>
          <h1 className="text-4xl py-4">
          MyWork for every industry
        </h1>
        <p className="mb-10">Find out more about MyWork dedicated industry-based recruitment software, built to help businesses hire smarter and grow faster and for freelancers to get desired jobs.</p>
          </div>
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">River</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Forest</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div>
    </section>
  );
} */
function PricingSection() {
  const [selection, setSelection] = useState("freelancer");

  return (
    <section
      id="pricing"
      className="pricing-section relative flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl py-4 text-primary-500">Pricing</h1>
        <div className="flex items-center border-2 border-primary-500 rounded-3xl p-0.5 my-6">
          <button
            className={cx("px-4 py-2 rounded-3xl transition-all duration-150", {
              "bg-primary-500 text-white": selection === "freelancer",
              "hover:bg-primary-100": selection !== "freelancer",
            })}
            onClick={() => setSelection("freelancer")}
          >
            Freelancer
          </button>
          <button
            className={cx("px-4 py-2 rounded-3xl transition-all duration-150", {
              "bg-primary-500 text-white": selection === "employer",
              "hover:bg-primary-100": selection !== "employer",
            })}
            onClick={() => setSelection("employer")}
          >
            Employer
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center py-4 gap-10 z-10">
        {pricing[selection].map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </section>
  );
}




const pricing: Record<string, PricingCardProps[]> = {
  freelancer: [
    {
      price: "Free",
      button: "Free Forever",
      items: [
        { title: "Apply upto 10 jobs per month", enabled: true },
        { title: "Translate chats to your language manually", enabled: true },
        { title: "Limited Employee", enabled: true },
        
      ],
    },
    {
      price: "$8",
      period: "month",
      button: "Premium",
      items: [
        { title: "Apply upto 10 jobs per month", enabled: true },
        { title: "Translate chats to your language", enabled: true },
        { title: "Limited Employee", enabled: true },

      ],
    },
    
  ],
  employer: [
    {
      price: "Free",
      button: "Free Forever",
      items: [
        { title: "5 job postings per month", enabled: true },
        { title: "Translate chats to your language manually", enabled: true },
      ],
    },
    {
      price: "$10",
      period: "month",
      button: "Premium",
      items: [
        { title: "Unlimited job postings per month", enabled: true },
        { title: "Auto translate chats to your language", enabled: true },
      ],
    },
  ],
};

interface PricingCardProps {
  price: string;
  period?: string;
  button: string;
  items: {
    title: string;
    enabled: boolean;
  }[];
}

function PricingCard({ price, period, button, items }: PricingCardProps) {
  return (
    <div className="max-w-full md:max-w-xs bg-white border rounded-2xl shadow-md p-5">
      <div className="text-center">
        <h1 className="text-3xl py-4">
          <span>{price}</span>
          {period && <span className="text-sm">/{period}</span>}
        </h1>
        <hr className="border-primary-700 my-3" />
        <button className="block w-full py-2 bg-primary-500 text-white rounded-3xl hover:bg-primary-400 transition duration-150">
          {button}
        </button>
      </div>
      <div className="py-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center py-2">
            <div
              className={cx(
                "p-1 rounded-md",
                item.enabled ? "bg-green-300" : "bg-red-300"
              )}
            >
              {item.enabled ? <FiCheck /> : <FiX />}
            </div>
            <p className="text-sm px-2 truncate">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// function Frequently(){
//   return(
//     <section className="py-4">
//   <div className="container">
//     <div className="row my-5">
//       <div className="col-md-6 mx-auto text-center ">
//         <h1 className="text-4xl font-bold tracking-wider">
//         Frequently Asked Questions</h1>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-10 mx-auto">
//         <div className="accordion" id="accordionRental">

//           <div className="accordion-item mb-3">
//             <h5 className="accordion-header" id="headingOne">
//               <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               How do I create an account?
//                 <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
//                 <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
//               </button>
//             </h5>
//             <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionRental">
//               <div className="accordion-body text-sm opacity-8">
//                 We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game
//                 of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item mb-3">
//             <h5 className="accordion-header" id="headingTwo">
//               <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               How do I create an account?
//                 <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
//                 <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
//               </button>
//             </h5>
//             <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
//               <div className="accordion-body text-sm opacity-8">
//                 It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it&#39;s about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
//                 We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item mb-3">
//             <h5 className="accordion-header" id="headingThree">
//               <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               How do I create an account?
//                 <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
//                 <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
//               </button>
//             </h5>
//             <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental">
//               <div className="accordion-body text-sm opacity-8">
//                 The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
//                 If everything I did failed - which it doesn&#39;t, it actually succeeds - just the fact that I&#39;m willing to fail is an inspiration. People are so scared to lose that they don&#39;t even try. Like, one thing people can&#39;t say is that I&#39;m not trying, and I&#39;m not trying my hardest, and I&#39;m not trying to do the best way I know how.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item mb-3">
//             <h5 className="accordion-header" id="headingFour">
//               <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//               How do I create an account?
//                 <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
//                 <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
//               </button>
//             </h5>
//             <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental">
//               <div className="accordion-body text-sm opacity-8">
//                 I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They&#39;re slowed down by their perception of themselves. If you&#39;re taught you can’t do anything, you won’t do anything. I was taught I could do everything.
//                 If everything I did failed - which it doesn&#39;t, it actually succeeds - just the fact that I&#39;m willing to fail is an inspiration. People are so scared to lose that they don&#39;t even try. Like, one thing people can&#39;t say is that I&#39;m not trying, and I&#39;m not trying my hardest, and I&#39;m not trying to do the best way I know how.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item mb-3">
//             <h5 className="accordion-header" id="headingFifth">
//               <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
//               How do I create an account?
//                 <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
//                 <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
//               </button>
//             </h5>
//             <div id="collapseFifth" className="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionRental">
//               <div className="accordion-body text-sm opacity-8">
//                 There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.
//                 I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They&#39;re slowed down by their perception of themselves. If you&#39;re taught you can’t do anything, you won’t do anything. I was taught I could do everything.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }
function DownloadSection() {
  return (
    <section
      id="download"
      className="bg-gradient-to-r from-primary-600 to-primary-400 py-16"
    >
      <div className="w-full text-center text-white">
        <p className="'relative' w-full inline-block relative font-bold">
          <span>Download Our App</span>
          <span className="download-label-decoration-0" />
          <span className="download-label-decoration-1" />
        </p>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.iwork.iworktest"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="block w-44"
            src={"/assets/imgs/google-play-badge.png"}
            alt="Get it on Google Play"
          />
        </a>
        <a href="/">
          <img
            className="block w-44 p-4"
            src={"/assets/imgs/app-store-badge.svg"}
            alt="Download on the App Store"
          />
        </a>
      </div>
    </section>
  );
}