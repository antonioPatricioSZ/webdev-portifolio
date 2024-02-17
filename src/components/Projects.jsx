import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-16 md:py-20 align-element" id="projects">
      <SectionTitle text="projetos" />
      <div className="pt-12 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
