import BadgePrimary from "../Badges/BadgePrimary";
import TitleBox from "../TitleBox/TitleBox";
import SocialCard from "./SocialCard";
import ActionBtn from "../ActionBtn/ActionBtn";

function ContactBanner() {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-6 text-center z-20">
        <BadgePrimary
          title="Open to Opportunities and New Projects"
          available
        />
        <div className="flex flex-col gap-4 max-w-4xl justify-center items-center">
          <TitleBox title="Always up for a good idea and great coffee." />
          <p className="text-base font-normal">
            Let’s connect and build something that feels right and performs even
            better.
          </p>
          <ActionBtn url="mailto:rudolphdev20@gmail.com" text=" Reach out" />
        </div>
      </div>

      <div className="w-full">
        <SocialCard />
      </div>
    </div>
  );
}

export default ContactBanner;
