import LogoLoop from "@/components/ui/logoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiFigma,
  SiNotion,
  SiAsana,
  SiSpotify,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiVite,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiHtml5 />,
    title: "Html5",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
  },

  { node: <SiReact />, title: "React" },

  { node: <SiNextdotjs />, title: "Next.js" },

  {
    node: <SiTypescript />,
    title: "TypeScript",
  },

  {
    node: <SiRedux />,
    title: "Redux",
  },

  {
    node: <SiVite />,
    title: "Vite",
  },

  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
  },

  {
    node: <SiSass />,
    title: "Sass",
  },
  {
    node: <SiShadcnui />,
    title: "Shadcn UI",
  },
  {
    node: <SiGithub />,
    title: "Github",
  },
  {
    node: <SiFigma />,
    title: "Figma",
  },
  {
    node: <SiNotion />,
    title: "Notion",
  },
  {
    node: <SiAsana />,
    title: "Asana",
  },
  {
    node: <SiSpotify />,
    title: "Spotify",
  },
];

function LogoSlider() {
  return (
    <section className="max-w-[100vw] md:max-w-4xl">
      <div className="w-full">
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="left"
          logoHeight={40}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#fff"
          ariaLabel="Tech stack"
        />
      </div>
    </section>
  );
}

export default LogoSlider;
