import { useEffect, useState, useRef } from "react";
import StaggeredList from "../components/StaggeredList";
import ProjectCard from "../components/ProjectCard";

// List of all featured projects to display
const projects = [
  {
    name: "BloomTech Labs Project",
    description:
      "I completed three development tickets as part of a student project at BloomTech. The project uses React (with Vite) for the frontend, Axios for communication with the backend API, and Plotly for advanced data visualizations. The app allows users to view different types of interactive graphs, filter data, and download datasets for further analysis.",
    github: "https://github.com/Kornetas/asylum-hrf-fe-starter",
    website: "https://asylum-fe.netlify.app",
    techs: ["HTML5", "Javascript", "React", "Tailwind CSS", "RTL", "Cypress"],
  },
  {
    name: "Portfolio of Arkadiusz Rak",
    description:
      "I built a personal portfolio website with a modern, fully responsive design using React and Vite. The site highlights my skills, projects, and experience as a Full Stack Web Developer. It features animated transitions, a mobile-friendly layout, and an eye-catching landing page. Visitors can browse my work, download my resume, and contact me.",
    github: "https://github.com/Kornetas/portfolio",
    website: "https://kornet.dev",
    techs: ["HTML5", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    name: "API Forge",
    description:
      "Simple Node.js + Express API with user authentication, JWT, roles (admin/user), and CRUD for products – fully tested with Jest.",
    github: "https://github.com/Kornetas/api-forge",
    website: "https://github.com/Kornetas/api-forge",
    techs: ["Node.js", "Express", "MongoDB", "Jest", "Supertest"],
  },
  {
    name: "GraphQL Project in Progress",
    description:
      "his project is currently under development. The stack includes React and Next.js for the frontend, with module CSS for styling. The backend uses GraphQL and Apollo Server, with PostgreSQL as the database. End-to-end testing is performed using Playwright. The main goal is to build a modern, scalable web application with real-time data handling.",
    github: "https://github.com/Kornetas",
    website: "https://github.com/Kornetas",
    techs: [
      "Javascript",
      "React",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Playwright",
    ],
  },
];

export default function Projects() {
  // Show the project cards after a short delay (for entrance animation)
  const [showProjects, setShowProjects] = useState(false);

  // Refs to control font size of project descriptions based on content height
  const descRefs = useRef([]);

  // Dynamically adjust description font size for each project card
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

  // Fade-in animation for the projects section
  useEffect(() => {
    const timeout = setTimeout(() => setShowProjects(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col items-center min-h-[60vh] px-4 py-12">
      {/* Section heading */}
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

      {/* Animated grid of project cards */}
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

      {/* GitHub link at the bottom */}
      {showProjects && (
        <StaggeredList from="bottom" stagger={0.9} duration={0.5}>
          <a
            href="https://github.com/Kornetas"
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
