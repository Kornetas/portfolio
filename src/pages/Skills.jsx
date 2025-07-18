import { useRef, useEffect, useState } from "react";
import StaggeredList from "../components/StaggeredList";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTimes,
  FaCubes,
} from "react-icons/fa";
import {
  SiRedux,
  SiAxios,
  SiTailwindcss,
  SiPyup,
  SiNextdotjs,
  SiVite,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiKnexdotjs,
  SiFirebase,
  SiJest,
  SiCypress,
  SiPuppeteer,
  SiPostman,
  SiInsomnia,
  SiHttpie,
  SiEslint,
  SiOpenai,
  SiHeroku,
  SiRailway,
  SiRender,
  SiNetlify,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import Seo from "../components/Seo";

// Main skills list with icons
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "RESTful API", icon: <FaDatabase className="text-blue-300" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
  { name: "Axios", icon: <SiAxios className="text-sky-500" /> },
  { name: "Yup", icon: <SiPyup className="text-yellow-700" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Cypress", icon: <SiCypress className="text-green-400" /> },
  { name: "Puppeteer", icon: <SiPuppeteer className="text-yellow-500" /> },
  { name: "Knex.js", icon: <SiKnexdotjs className="text-orange-400" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Heroku", icon: <SiHeroku className="text-purple-800" /> },
  {
    name: "Railway",
    icon: <SiRailway className="text-black dark:text-white" />,
  },
  { name: "Render", icon: <SiRender className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Insomnia", icon: <SiInsomnia className="text-purple-600" /> },
  { name: "HTTPie", icon: <SiHttpie className="text-green-500" /> },
  { name: "ESLint", icon: <SiEslint className="text-purple-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-green-600" /> },
];

// Skills without icons (just names)
const skillsNoIcon = [
  "Authentication",
  "Authorization",
  "JWT",
  "bcrypt",
  "Validation",
  "CRUD",
  "Debugging",
  "Algorithms",
  "Code Refactoring",
  "Architecture",
  "Deployment",
  "Webpack",
  "Babel",
  "Cache",
  "Zustand",
  "Supertest",
  "Playwright",
  "Morgan",
  "SEO",
  "VS Code",
  "No-Code Automation",
  "Agile Project Management",
];

// Combine all skills into one array for filtering/search
const allSkills = [
  ...skills,
  ...skillsNoIcon.map((name) => ({
    name,
    icon: null,
  })),
];

export default function Skills() {
  // State for search and animated entrances
  const [query, setQuery] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const hasAnimated = useRef(false);

  // Entrance animation for search box and skills grid
  useEffect(() => {
    const t1 = setTimeout(() => setShowSearchBox(true), 400);
    const t2 = setTimeout(() => setShowSkills(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (showSkills) hasAnimated.current = true;
  }, [showSkills]);

  // Filter skills based on user input
  const filteredSkills = allSkills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Seo
        title="Skills | Arkadiusz Rak – Full Stack Web Developer"
        description="Explore all skills and tech stacks used by Full Stack Web Developer Arkadiusz Rak: React, Node.js, SQL, Tailwind, testing, deployment tools, and more."
        url="https://kornet.dev/skills"
        canonical="https://kornet.dev/skills"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arkadiusz Rak",
          jobTitle: "Full Stack Web Developer",
          url: "https://kornet.dev/skills",
          knowsAbout: [
            "JavaScript",
            "React",
            "Redux",
            "Zustand",
            "Next.js",
            "Vite",
            "Node.js",
            "Express",
            "REST API",
            "GraphQL",
            "SQL",
            "PostgreSQL",
            "MongoDB",
            "Firebase",
            "Jest",
            "Cypress",
            "Playwright",
            "Git",
            "GitHub",
            "Tailwind CSS",
            "Bootstrap",
            "UI/UX",
            "Responsive Design",
            "Testing",
            "API Testing",
            "Continuous Integration",
            "Agile",
            "SEO",
            "Web Development",
          ],
        }}
      />

      <section className="flex flex-col items-center min-h-[80vh] px-4 py-10">
        {/* Animated header with h1 and underline */}
        <StaggeredList
          from="bottom"
          stagger={0.14}
          duration={0.45}
          className="w-full flex flex-col items-center"
        >
          <h1 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Skills & Tech Stack
          </h1>
          <div className="mx-auto mt-4 h-1 sm:w-24 w-12 bg-cyan-400 rounded-full" />
        </StaggeredList>

        {/* Animated search box for filtering skills */}
        {showSearchBox && (
          <StaggeredList
            from="bottom"
            stagger={0.12}
            duration={0.4}
            className="w-full"
          >
            <div className="relative w-full mt-6 mb-3 max-w-xs mx-auto">
              <input
                type="text"
                name="skills-search"
                id="skills-search"
                className="bg-[#181828] text-white rounded-xl px-4 py-2 border border-cyan-400 focus:outline-none w-full pr-10"
                placeholder="Search skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {/* Button to clear search input */}
              {query && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-200 text-xl"
                  onClick={() => setQuery("")}
                  aria-label="Clear"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </StaggeredList>
        )}

        <div className="relative flex flex-col justify-center items-center w-full min-h-[200px] max-w-6xl">
          {/* Show message if no skills match the filter */}
          {showSkills &&
            (filteredSkills.length === 0 ? (
              <div className="text-red-600 text-lg font-semibold py-8 text-center mt-[-100px]">
                Sorry, I don’t know this skill yet – but I’m always learning and
                leveling up!
              </div>
            ) : (
              // Animated grid of skill icons/badges
              <StaggeredList
                animate={!hasAnimated.current}
                from="bottom"
                stagger={0.07}
                duration={0.5}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full mt-16"
              >
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-gray-800 rounded-xl p-4 border border-gray-700 shadow hover:shadow-md transition hover:scale-105"
                  >
                    {/* Skill icon (if available) */}
                    {skill.icon ? (
                      <div className="text-4xl mb-2">{skill.icon}</div>
                    ) : (
                      <div className="text-4xl mb-2 flex items-center justify-center">
                        <FaCubes className="text-blue-400" />
                      </div>
                    )}

                    <div className="text-white font-medium text-center text-sm">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </StaggeredList>
            ))}
        </div>
      </section>
    </>
  );
}
