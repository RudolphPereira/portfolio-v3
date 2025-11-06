import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import fallBackImage from "@/app/assets/fallImage.jpg";

type Props = {
  title?: string;
  image?: string | StaticImageData;
};

function AboutCard({ title, image }: Props) {
  return (
    <Card className="flex flex-col shadow-none gap-0 py-0 group transition-all duration-400 h-full hover:shadow-xs">
      <CardContent className="px-2 mt-2 flex flex-col gap-4 flex-1">
        <div className="flex justify-center items-center h-50 md:w-65 md:h-65 rounded-xl transition-all duration-400">
          <div className="w-full  h-full overflow-hidden  rounded-xl md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-250">
            <Image
              className="w-full h-full group-hover:scale-105 rounded-xl object-cover  transition-all duration-250"
              alt={title || ""}
              src={image || fallBackImage}
              width={0}
              height={0}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="my-3">
        <p className="text-xs sm:text-sm flex-1 font-semibold text-darkGrey text-center">
          {title}
        </p>
      </CardFooter>
    </Card>
  );
}

export default AboutCard;
