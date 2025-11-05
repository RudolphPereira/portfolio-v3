"use client";
import Link from "next/link";
import BadgePrimary from "../Badges/BadgePrimary";
import TitleBox from "../TitleBox/TitleBox";
import AboutSlider from "./AboutSlider";

function AboutBanner() {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-6 text-center z-20">
        <BadgePrimary title="Hi, I’m a Front-End Engineer" />
        <div className="flex flex-col gap-4">
          <TitleBox title="I help businesses build websites and products that blend thoughtful design with robust engineering" />
          <p className="text-base font-normal">
            <span className="block">
              I’ve built software in diverse environments from{" "}
              <span className="font-bold">ad tech agencies</span> and{" "}
              <span className="font-bold">SaaS startups</span>
            </span>
            <span className="block">
              to <span className="font-bold">leading design studios</span>{" "}
              collaborating with the{" "}
              <span className="font-bold">UAE government</span>.{" "}
              <span>View full</span>{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-0.5 animate-pulse text-pink-800 hover:animate-none font-medium transition-all ease-in-out duration-200"
              >
                Résumé
              </Link>
            </span>
          </p>
          <div className="flex justify-center gap-3 flex-wrap flex-col-reverse md:flex-row items-center">
            <BadgePrimary title="4+ Years of Experience" />
            <BadgePrimary title="20+ Projects Completed" />
          </div>
          <p className="text-base font-normal">
            <span className="block">
              When I’m off the clock, I enjoy grabbing a slice of pizza or
              manakish
            </span>
            <span className="block">
              and carving out a bit of time whenever I can to{" "}
              <Link
                href="https://www.instagram.com/therudolphpereira/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-0.5 animate-pulse text-pink-800 hover:animate-none font-medium transition-all ease-in-out duration-200"
              >
                train.
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="w-full">
        <AboutSlider />
      </div>
    </div>
  );
}

export default AboutBanner;
