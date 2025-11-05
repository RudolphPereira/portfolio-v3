import { Button } from "@/components/ui/button";
import BadgePrimary from "../Badges/BadgePrimary";
import { ArrowRight } from "lucide-react";

function HeroBanner() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-15 md:mt-25">
      <h2 className="text-6xl sm:text-7xl font-caveat font-semibold mb-3 text-center">
        Rudolph Pereira
      </h2>

      <div className="flex flex-col gap-2 sm:gap-4">
        <h1 className="text-3xl sm:text-5xl text-center font-semibold flex flex-col sm:leading-13">
          <span>Building exceptional web experiences</span>
          <span>that captivate, foster trust and drive growth.</span>
        </h1>
        <p className="text-base font-normal text-center">
          Seamless, purposeful, and polished touchpoints for every user.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 items-center">
        <BadgePrimary
          title="Open to Opportunities and New Projects"
          available
        />

        <Button className="cursor-pointer">
          Reach out <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default HeroBanner;
