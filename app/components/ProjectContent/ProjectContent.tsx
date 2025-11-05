import BadgePrimary from "../Badges/BadgePrimary";
import Projects from "./Projects";

function ProjectContent() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-7 pt-4"
    >
      <BadgePrimary title="Explore Curated Feature Rich Builds" />
      <Projects />
    </section>
  );
}

export default ProjectContent;
