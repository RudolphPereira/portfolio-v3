import Link from "next/link";
import { IconType } from "react-icons";
import { SiGoogledocs } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

type Data = {
  url: string;
  icon: IconType;
};

export const socialData: Data[] = [
  { url: "/resume.pdf", icon: SiGoogledocs },
  { url: "mailto:rudolphdev20@gmail.com", icon: SiGmail },
  { url: "https://www.linkedin.com/in/rudolphpereira/", icon: SiLinkedin },
  { url: "https://github.com/RudolphPereira", icon: SiGithub },
  {
    url: "https://www.instagram.com/therudolphpereira/reels/",
    icon: SiInstagram,
  },
];

function SocialCard() {
  return (
    <div className="bg-componentBackground/45 h-75 shadow-sm rounded-lg flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {socialData.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white p-3 rounded-lg shadow-md transition-all ease-in-out duration-200 hover:bg-black hover:text-white "
            >
              <Icon className="w-6 h-6" />
            </Link>
          );
        })}
      </div>
      <footer className="w-full py-4 text-center text-sm text-darkGrey">
        Developed by Rudolph Pereira © 2025
      </footer>
    </div>
  );
}

export default SocialCard;
