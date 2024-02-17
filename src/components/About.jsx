import SectionTitle from "./SectionTitle";
import aboutSvg from "./../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64 hidden md:flex" />
        <article>
          <SectionTitle text="Sobre" />
          <p className="text-slate-600 mt-8 leading-loose">
          Me chamo Antonio Patrício, tenho 24 anos e sou estudante da área de programação (cursando Análise e Desenvolvimento de Sistemas). Desenvolvo aplicações web: Frontend e Backend. Com conhecimento em algumas linguagens e frameworks, busco constantemente aprimorar minhas habilidades técnicas. Te convido a conhecer meus projetos e entrar em contato case interesse.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
