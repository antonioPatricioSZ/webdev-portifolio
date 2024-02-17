import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto" >
      <div className="py-16 md:py-20 align-element">
        <SectionTitle text="habilidades" />
          <div className="pt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {skills.map((skill) => {
              return <SkillsCard key={skill.id} {...skill} />;
            })}
          </div>
        </div>     
    </section>
  );
};

export default Skills;
