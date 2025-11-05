import { StaticImageData } from "next/image";
import getQuotingLogo from "@/app/assets/quotes.jpg";
import easyBankLogo from "@/app/assets/easy-bank.jpg";
import cardsLogo from "@/app/assets/cards.jpg";
import cryptoLogo from "@/app/assets/crypto.jpg";
import ProjectCard from "./ProjectCard";

type Data = {
  image: string | StaticImageData;
  title: string;
  desc: string;
  additionalCardContentClass: string;
  additionalBadgeClass: string;
  badges: string[];
  url?: string;
};

function Projects() {
  const data: Data[] = [
    {
      image: cryptoLogo,
      title: "Crypto Vault",
      desc: "A sleek app designed to help you track and manage your crypto investments effortlessly.",
      additionalCardContentClass:
        "group-hover:bg-violetPurple bg-violetPurple ",
      additionalBadgeClass:
        "group-hover:bg-violetPurple group-hover:text-darkGrey text-darkGrey bg-violetPurple",
      badges: [
        "Next.js",
        "TypeScript",
        "Redux tool-kit",
        "Recharts",
        "Shadcn",
        "Tailwind",
        "Motion",
      ],
      url: "https://cryptovau1t.vercel.app/",
    },
    {
      image: cardsLogo,
      title: "Cards",
      desc: "A simple and intuitive task manager built to keep your work planned, prioritized & organized.",
      additionalCardContentClass: "group-hover:bg-lightCrimson bg-lightCrimson",
      additionalBadgeClass: "group-hover:bg-lightCrimson bg-lightCrimson",
      badges: [
        "Vite",
        "TypeScript",
        "Context API",
        "Shadcn",
        "Tailwind",
        "Motion",
      ],
      url: "https://rudolphpereira.github.io/cards/",
    },
    {
      image: getQuotingLogo,
      title: "Get Quoting",
      desc: "A bright and inspiring app that keeps your motivation alive with uplifting quotes",
      additionalCardContentClass: "group-hover:bg-lightPurple bg-lightPurple",
      additionalBadgeClass:
        "group-hover:bg-lightPurple group-hover:text-darkGrey text-darkGrey bg-lightPurple",
      badges: ["JavaScript", "Text to speech API", "Data first approach"],
      url: "https://rudolphpereira.github.io/get-quoting/",
    },
    {
      image: easyBankLogo,
      title: "Easy Bank",
      desc: "A clean and modern homepage crafted for seamless performance across all devices",
      additionalCardContentClass: "group-hover:bg-lightGreen bg-lightGreen",
      additionalBadgeClass:
        "group-hover:bg-lightGreen group-hover:text-darkGrey bg-lightGreen text-darkGrey",
      badges: ["Bootstrap", "SASS", "Responsive"],
      url: "https://rudolphpereira.github.io/easyBank/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
      {data.map((item) => (
        <ProjectCard
          key={item.title}
          projectLogo={item.image}
          title={item.title}
          desc={item.desc}
          additionalCardContentClass={item.additionalCardContentClass}
          additionalBadgeClass={item.additionalBadgeClass}
          badges={item.badges}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default Projects;
