import { useEffect, useState, useRef } from "react";
import StaggeredList from "../components/StaggeredList";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "PortfolioNext",
    description:
      "A modern portfolio built with Next.js and Tailwind – fully responsive and ready for any occasion. Lightning-fast loading, SEO optimized, and packed with PRO-level animations.",
    github: "https://github.com/arekdev/portfolio-next",
    website: "https://portfolionext.vercel.app",
    techs: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "TaskFlow",
    description:
      "Task management application powered by Node.js, Express, and MongoDB. Features include team collaboration, notifications, and integrations – your personal project manager.",
    github: "https://github.com/arekdev/taskflow",
    website: "https://taskflow.vercel.app",
    techs: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "DevFinder",
    description:
      "Developer search application leveraging the GitHub API. Effortlessly filter, follow, and discover ideal developers for your team. Fast, modern, and visually stunning.",
    github: "https://github.com/arekdev/devfinder",
    website: "https://devfinder.vercel.app",
    techs: ["React", "Axios", "RESTful API"],
  },
  {
    name: "SQL Dashboard",
    description:
      "Data analytics dashboard using PostgreSQL, Chart.js, and Bootstrap. Features interactive charts, real-time summaries, and fully customizable filtering.",
    github: "https://github.com/arekdev/sql-dashboard",
    website: "https://sqldashboard.vercel.app",
    techs: ["PostgreSQL", "Chart.js", "Bootstrap"],
  },
];

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  const descRefs = useRef([]);

  useEffect(() => {
    descRefs.current.forEach((desc) => {
      if (!desc) return;
      desc.style.fontSize = "1.125rem";
      desc.style.lineHeight = "1.5";
      if (desc.scrollHeight > 60) desc.style.fontSize = "1rem";
      if (desc.scrollHeight > 75) desc.style.fontSize = "0.95rem";
      if (desc.scrollHeight > 90) desc.style.fontSize = "0.88rem";
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowProjects(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col items-center min-h-[60vh] px-4 py-12">
      <StaggeredList
        from="bottom"
        stagger={0.3}
        duration={0.5}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-center hover:text-cyan-400 transition">
          My Projects
        </h2>
        <div className="mx-auto my-2 h-1 w-16 bg-cyan-400 rounded-full" />
        <p className="text-xl text-gray-300 text-center mb-20">
          Check out some of my recent work
        </p>
      </StaggeredList>

      {showProjects && (
        <StaggeredList
          from="bottom"
          stagger={0.5}
          duration={0.5}
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              project={project}
              descRef={(el) => (descRefs.current[idx] = el)}
            />
          ))}
        </StaggeredList>
      )}

      {showProjects && (
        <StaggeredList from="bottom" stagger={0.9} duration={0.5}>
          <a
            href="https://github.com/arekdev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-xl text-cyan-400 font-bold text-lg hover:bg-cyan-400 hover:text-[#181828] transition shadow-lg mx-auto block"
          >
            View More on GitHub
          </a>
        </StaggeredList>
      )}
    </section>
  );
}
