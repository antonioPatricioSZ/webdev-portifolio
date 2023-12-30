import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import project1 from './assets/projeto1.jpeg'
import project2 from './assets/projeto2.jpeg'
import project3 from './assets/projeto3.jpeg'

export const links = [
  { id: nanoid(), href: "#about", text: "sobre" },
  { id: nanoid(), href: "#skills", text: "habilidades" },
  { id: nanoid(), href: "#projects", text: "projetos" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Altamente qualificado em HTML e CSS, criando habilmente sites visualmente atraentes e responsivos para experiências de usuário ideais.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Experiência em JavaScript, construindo aplicações web interativas e dinâmicas com foco em interações e funcionalidades perfeitas do usuário.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Proficiência avançada em React, desenvolvendo aplicações front-end eficientes e interativas com forte ênfase em arquitetura baseada em componentes.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: "https:react-projects.netlify.app/",
    github: "https:github.com/john-smilga",
    title: "primeiro projeto",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: project2,
    url: "https:react-projects.netlify.app/",
    github: "https:github.com/john-smilga",
    title: "segundo projeto",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: project3,
    url: "https:react-projects.netlify.app/",
    github: "https:github.com/john-smilga",
    title: "terceiro projeto",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
