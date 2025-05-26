import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PortfolioNext",
    img: "/project1.png",
    github: "https://github.com/arekdev/portfolio-next",
    live: "https://portfolionext.vercel.app",
  },
  {
    title: "DevFinder",
    img: "/project2.png",
    github: "https://github.com/arekdev/devfinder",
    live: "https://devfinder.vercel.app",
  },
  {
    title: "TaskFlow",
    img: "/project3.png",
    github: "https://github.com/arekdev/taskflow",
    live: "https://taskflow.vercel.app",
  },
  {
    title: "TodoApp",
    img: "/project4.png",
    github: "https://github.com/arekdev/taskflow",
    live: "https://taskflow.vercel.app",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-6 py-8 bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg">
      <div className="flex justify-center gap-10 flex-wrap w-full">
        {projects.map((project) => (
          <div
            key={project.title + project.img}
            className="bg-[#141425] rounded-xl border border-cyan-400 p-6 flex flex-col items-start w-80 shadow-lg hover:scale-105 transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-36 object-cover rounded mb-4"
            />
            <h3 className="text-white text-lg font-bold mb-2">
              {project.title}
            </h3>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-white flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
