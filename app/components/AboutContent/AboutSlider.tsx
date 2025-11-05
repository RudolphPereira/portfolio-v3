"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AboutCard from "./AboutCard";
import { StaticImageData } from "next/image";
import coffeeCardImage from "@/app/assets/coffeeCardImage.jpg";
import dubaiCardImage from "@/app/assets/dubaiCardImage.jpg";
import flightCardImage from "@/app/assets/flightCardImage.jpg";
import mumbaiCardImage from "@/app/assets/mumbaiCardImage.jpg";
import autoScroll from "embla-carousel-auto-scroll";

type Data = {
  title?: string;
  image?: string | StaticImageData;
};

function AboutSlider() {
  const data: Data[] = [
    {
      title: "Currently Dubai is home",
      image: dubaiCardImage,
    },
    {
      title: "Bombay are the roots",
      image: mumbaiCardImage,
    },
    {
      title: "Coffee is the drug",
      image: coffeeCardImage,
    },
    {
      title: "Remote, but always close",
      image: flightCardImage,
    },
  ];

  const autoScrollPlugin = autoScroll({
    speed: 1.5,
    startDelay: 0,
    direction: "forward",
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <Carousel
      className="w-full"
      plugins={[autoScrollPlugin]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="flex items-stretch">
        {data.map((item) => (
          <CarouselItem
            key={item.title}
            className="basis-1/2 md:basis-1/3 flex"
          >
            <div className="p-1 flex-1">
              <AboutCard title={item.title} image={item.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default AboutSlider;
