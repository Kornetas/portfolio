function Projects() {
  const projects = [
    {
      name: "DevConnect",
      description:
        "A social platform for developers to connect, share projects and ideas.",
      github: "https://github.com/example/devconnect",
      website: "https://devconnect-demo.vercel.app",
    },
    {
      name: "QuickTasker",
      description:
        "A simple and fast task manager for productivity enthusiasts.",
      github: "https://github.com/example/quicktasker",
      website: "https://quicktasker-demo.vercel.app",
    },
    {
      name: "Portfolio Magic",
      description:
        "A portfolio generator that lets users create stunning pages in minutes.",
      github: "https://github.com/example/portfolio-magic",
      website: "https://portfoliomagic-demo.vercel.app",
    },
  ];
  return (
    <section className="flex flex-col items-center min-h-[60vh] px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
        Projects
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className="bg-gray-800 rounded-xl p-6 shadow-neon-glow flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold text-neon-green mb-2">
              {project.name}
            </h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <a
              href={project.github}
              className="underline mr-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={project.website}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
