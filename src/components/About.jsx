import SectionTitle from "./SectionTitle";
import aboutSvg from "./../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="código e café" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            dignissimos quas nobis aperiam eveniet atque odit obcaecati unde
            numquam reiciendis optio, recusandae aliquid labore adipisci. Quos
            porro nesciunt veritatis similique.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
