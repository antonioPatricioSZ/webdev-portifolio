import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-12 md:py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">Eu sou Patrício</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Desenvolvedor Full Stack
          </p>
          <p className="mt-2 text-lg md:text-xl text-slate-700 capitalize tracking-wide">
          e estudante dedicado da área de programação. Minha paixão está em desenvolver aplicações web, tanto no Frontend quanto no Backend. Convido você a conhecer meu portfólio e explorar o mundo da programação através dos meus olhos. Vamos juntos nessa jornada de aprendizado e criação!
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/antonioPatricioSZ"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
            </a>
            <a
              href="https://www.linkedin.com/in/antoniopatr%C3%ADcio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
            </a>
            <a
              href="https://www.instagram.com/patricio_sfilho/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaInstagramSquare>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
