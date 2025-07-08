import { useEffect, useState } from "react";
import StaggeredList from "../components/StaggeredList";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";

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
      "I built a personal portfolio website with a modern, fully responsive design using React and Vite. The site highlights my skills, projects, and experience as a Full Stack Web Developer, and is optimized for SEO with semantic HTML and proper meta tags. It features animated transitions, a mobile-friendly layout, and an eye-catching landing page. Visitors can browse my work, download my resume, and contact me.",
    github: "https://github.com/Kornetas/portfolio",
    website: "https://kornet.dev",
    techs: ["HTML5", "JavaScript", "React", "Vite", "Tailwind CSS"],
  },
  {
    name: "API Forge",
    description:
      "A RESTful API built with Node.js, Express, and MongoDB, supporting user registration, JWT authentication, and role-based access. Product CRUD endpoints are protected so only admins or product owners can modify or delete items. Passwords are hashed with bcrypt and core features are covered by Jest tests.",
    github: "https://github.com/Kornetas/api-forge",
    website: "https://github.com/Kornetas/api-forge",
    techs: ["Node.js", "Express", "MongoDB", "Jest", "Supertest"],
  },
  {
    name: "DevTracker – Task Management App",
    description:
      "This project is currently under development. The stack includes React and Next.js for the frontend, with module CSS for styling. The backend uses GraphQL and Apollo Server, with PostgreSQL as the database. End-to-end testing is performed using Playwright. The main goal is to build a modern, scalable web application with real-time data handling.",
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

  // Fade-in animation for the projects section
  useEffect(() => {
    const timeout = setTimeout(() => setShowProjects(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Seo
        title="Projects | Arkadiusz Rak – Full Stack Web Developer"
        description="A showcase of recent web development projects by Arkadiusz Rak. Explore React apps, RESTful APIs, data visualizations, and more – built with modern stacks"
        url="https://kornet.dev/projects"
        canonical="https://kornet.dev/projects"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arkadiusz Rak",
          jobTitle: "Full Stack Web Developer",
          url: "https://kornet.dev/projects",
          hasOccupation: {
            "@type": "Occupation",
            name: "Web Developer",
            description:
              "Building web applications using React, Node.js, SQL, and more.",
          },
        }}
      />

      <section className="flex flex-col items-center min-h-[80vh] px-2 py-10">
         {/* Section heading */}
        <StaggeredList
          from="bottom"
          stagger={0.3}
          duration={0.5}
          className="w-full flex flex-col items-center"
        >
          <h1 className="inline-block text-4xl md:text-5xl font-bold text-white mb-4 text-center hover:text-cyan-400 transition">
            Featured Projects
          </h1>
          <div className="mx-auto my-4 h-1 w-24 bg-cyan-400 rounded-full" />
          <h2 className="text-xl md:text-1xl text-gray-300 mb-12 text-center">
            Check out some of my recent work
          </h2>
        </StaggeredList>

        <div
          className="w-full flex flex-col items-center"
          style={{ minHeight: "950px" }}
        >
          {/* Animated grid of project cards */}
          {showProjects && (
            <StaggeredList
              from="bottom"
              stagger={0.5}
              duration={0.5}
              className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
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
        </div>
      </section>
    </>
  );
}
