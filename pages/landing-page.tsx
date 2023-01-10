import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import cx from "classnames";
// import "../styles/globals.css";
// import "../styles/landing-page.css";



export default function LandingPage() {
  return (
    <div className="bg-gray-50 font-medium">
      <HeroSection />
      <AnalyticsSection />
      <WorkersSection />
      <JobPostingSection />
      <CommunicationSection />
      <PricingSection />
      <DownloadSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center py-16"
    >
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-wider">
          Right Skill At Right Place.
        </h1>
        <p>The platform to connect with the workforce and recruiters</p>
      </div>
      <img
        className="block max-w-xs md:max-w-xl"
        src={"/assets/imgs/home-hero.svg"}
        alt="myWork"
      />
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section
      id="analytics"
      className="flex flex-col justify-center items-center text-center py-16 bg-primary-50"
    >
      <h1 className="text-lg font-bold">Self Employed Workers</h1>
      <img
        className="block max-w-full md:max-w-sm my-12"
        src={"/assets/imgs/home-analytics-graph.svg"}
        alt="myWork"
      />
      <p className="max-w-2xl">
        The share of self-employed workers saw an <b>increase to 14.7%</b> in
        June 2020 from 13.5% a year back. The increase in the self-employment
        was more for older workers, youths, and those in non-PMET jobs.
      </p>
    </section>
  );
}

function WorkersSection() {
  return (
    <section
      id="workers"
      className="flex flex-col justify-center items-center text-center py-16"
    >
      <h1 className="text-3xl text-primary-500 font-semibold">
        Workers Holding Multiple <br /> Jobs went Up in 2020
      </h1>
      <img
        className="block max-w-2xl my-16"
        src={"/assets/imgs/workers.svg"}
        alt="myWork"
      />
    </section>
  );
}

function JobPostingSection() {
  return (
    <section
      id="job-posting"
      className="flex items-center justify-center preview-card"
    >
      <div className="flex flex-wrap justify-center items-center py-16 bg-primary-100 rounded-3xl container p-10">
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-4xl py-4 text-primary-500">
            Right Skill At Right Place
          </h1>
          <p className="relative px-8 py-2 block item">
            Not anymore hiring for longer than required
          </p>
          <p className="relative px-8 py-2 block item">
            Skills recruited in no time
          </p>
          <p className="relative px-8 py-2 block item">
            Not anymore seeking long term job
          </p>
          <p className="relative px-8 py-2 block item">
            Juggle between multiple jobs
          </p>
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <img
            className="block"
            src={"/assets/imgs/job-posting.png"}
            alt="myWork"
          />
        </div>
      </div>
    </section>
  );
}

function CommunicationSection() {
  return (
    <section
      id="communication"
      className="flex items-center justify-center preview-card my-16"
    >
      <div className="flex flex-wrap justify-center items-center py-16 bg-primary-100 rounded-3xl container p-10">
        <div className="w-full md:w-1/2 max-w-md">
          <img
            className="block"
            src={"/assets/imgs/communication.png"}
            alt="myWork"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-4xl py-4 text-primary-500">
            Easier to Communicate
          </h1>
          <p className="relative px-8 py-2 block item">No language barrier</p>
          <p className="relative px-8 py-2 block item">No time barrier</p>
        </div>
      </div>
    </section>
  );
}

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
      ],
    },
    {
      price: "$8",
      period: "month",
      button: "Premium",
      items: [
        { title: "Unlimited job applications", enabled: true },
        { title: "Auto translate chats to your language", enabled: true },
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
