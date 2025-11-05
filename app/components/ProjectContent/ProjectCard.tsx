import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import BadgeSecondary from "../Badges/BadgeSecondary";
import ActionBtn from "../ActionBtn/ActionBtn";

type Props = {
  projectLogo?: string | StaticImageData;
  title?: string;
  desc?: string;
  url?: string;
  additionalCardContentClass?: string;
  badges?: string[];
  additionalBadgeClass?: string;
};

function ProjectCard({
  projectLogo,
  title,
  desc,
  url,
  additionalCardContentClass,
  additionalBadgeClass,
  badges,
}: Props) {
  return (
    <Card className="flex flex-col max-w-md shadow-none gap-0 pt-0 group transition-all duration-400 h-full hover:shadow-xs">
      <CardHeader className="py-3 px-5 flex flex-row items-center gap-1 font-semibold text-lg">
        {title}
      </CardHeader>

      <CardContent className="px-5 flex flex-col gap-4 flex-1">
        <div
          className={`flex  justify-center items-center w-full h-68  ${additionalCardContentClass} md:bg-componentBackground rounded-xl transition-all duration-400`}
        >
          <div className="w-[80%] rounded-xl md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-250">
            <Image
              src={projectLogo || ""}
              width={0}
              height={0}
              className="w-full h-full object-contain rounded-xl group-hover:shadow-md border-transparent group-hover:border-white scale-110 md:scale-100 group-hover:scale-105 border-3 group-hover:drop-shadow-xs transition-all duration-250"
              alt={title || ""}
            />
          </div>
        </div>

        {badges && (
          <div className="badges flex-1 flex flex-wrap gap-1.5 items-center">
            {badges.map((item) => (
              <BadgeSecondary
                additionalBadgeClass={additionalBadgeClass}
                key={item}
                title={item}
              />
            ))}
          </div>
        )}

        <p className="text-base flex-1 font-normal">{desc}</p>
      </CardContent>

      <CardFooter className="mt-6">
        <ActionBtn url={url} text="Visit app" />
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
