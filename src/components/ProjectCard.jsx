import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

export default function ProjectCard({ project, descRef }) {
  return (
    // Main card container for a single project
    <div className="bg-[#232336] rounded-2xl p-10 shadow-lg flex flex-col justify-between border border-cyan-800 min-h-[330px] md:min-h-[380px] w-full max-w-3xl mx-auto">
      <div>
        {/* Project name */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center">
          {project.name}
        </h3>
        <p
          ref={descRef}
          className="text-gray-300 mb-4 min-h-[48px] text-center"
          style={{ wordBreak: "break-word" }}
        >
          {project.description}
        </p>
      </div>
      <div>
        {/* Technologies used in the project */}
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
        <div className="flex gap-4 mt-4 justify-center">
          <a
            href={project.github}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-[#181828] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.website}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-pink-400 text-pink-300 font-bold hover:bg-pink-400 hover:text-[#181828] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
