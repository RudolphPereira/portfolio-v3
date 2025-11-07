import AboutContent from "./components/AboutContent/AboutContent";
import ContactContent from "./components/ContactContent/ContactContent";
import HeroContent from "./components/HeroContent/HeroContent";
import LogoSlider from "./components/LogoSlider/LogoSlider";
import ProjectContent from "./components/ProjectContent/ProjectContent";
import BlurContent from "./components/BlurContent/BlurContent";
import Navigation from "./components/Navigation/Navigation";

export default function Home() {
  return (
    <main className="flex px-4 max-w-4xl flex-col gap-10 w-full min-h-dvh m-auto items-center justify-center font-montserrat text-darkGrey">
      <Navigation />
      <HeroContent />
      <LogoSlider />
      <ProjectContent />
      <AboutContent />
      <ContactContent />
      <BlurContent />
    </main>
  );
}
