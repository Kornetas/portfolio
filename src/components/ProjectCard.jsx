import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-[#181828] rounded-2xl p-10 shadow-lg flex flex-col h-full border border-cyan-800 min-h-[330px] md:min-h-[380px] w-full max-w-3xl mx-auto">
      {/* Main card container for a single project */}
      <div>
        <h2 className="text-[1.2em] md:text-3xl font-extrabold text-white mb-3 text-left md:text-center">
          {project.name}
        </h2>
        <p className="text-gray-300 mb-4 min-h-[48px] text-left md:text-center">
          {project.description}
        </p>
      </div>

      {/* Technologies used in the project */}
      <div className="mt-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-900/50 border border-cyan-700 text-cyan-100 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Project links: GitHub and Live Demo */}
        <div className="flex gap-4 justify-center">
          <a
            href={project.github}
            aria-label={`View ${project.name} on GitHub`}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-[#181828] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.website}
            aria-label={`Live demo of ${project.name}`}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-pink-400 text-pink-300 font-bold hover:bg-pink-400 hover:text-[#181828] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
