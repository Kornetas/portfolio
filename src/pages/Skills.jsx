import { useState, useEffect } from "react";
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
  SiWordpress,
} from "react-icons/si";
import Seo from "../components/Seo";

// Main skills list with icons
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Axios", icon: <SiAxios className="text-sky-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Yup", icon: <SiPyup className="text-yellow-700" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "RESTful API", icon: <FaDatabase className="text-blue-300" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
  { name: "Knex.js", icon: <SiKnexdotjs className="text-orange-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Cypress", icon: <SiCypress className="text-green-400" /> },
  { name: "Puppeteer", icon: <SiPuppeteer className="text-yellow-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Insomnia", icon: <SiInsomnia className="text-purple-600" /> },
  { name: "HTTPie", icon: <SiHttpie className="text-green-500" /> },
  { name: "ESLint", icon: <SiEslint className="text-purple-500" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
  },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Heroku", icon: <SiHeroku className="text-purple-800" /> },
  {
    name: "Railway",
    icon: <SiRailway className="text-black dark:text-white" />,
  },
  { name: "Render", icon: <SiRender className="text-blue-400" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
];

// Skills without icons (just names)
const skillsNoIcon = [
  "Webpack",
  "VS Code",
  "Morgan",
  "JWT",
  "bcrypt",
  "Playwright",
  "Supertest",
  "Agile Project Management",
  "Algorithms",
  "Architecture",
  "Debugging",
  "Deployment",
  "No-Code Automation",
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
  // States for search, "show all" toggle, and animated entrances
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showShowAll, setShowShowAll] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  // Entrance animation for search box, "show all" button, and skills grid
  useEffect(() => {
    const t1 = setTimeout(() => setShowSearchBox(true), 400);
    const t2 = setTimeout(() => setShowShowAll(true), 900);
    const t3 = setTimeout(() => setShowSkills(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Filter skills based on user input or "show all"
  const filteredSkills = showAll
    ? allSkills
    : allSkills.filter((skill) =>
        skill.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      <Seo
        title="Skills | Arkadiusz Rak – Full Stack Web Developer"
        description="Discover the full stack and modern web technologies used by Arkadiusz Rak: React, Node.js, SQL, Tailwind, testing tools, and more."
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
            "Node.js",
            "Express",
            "SQL",
            "PostgreSQL",
            "MongoDB",
            "GraphQL",
            "Next.js",
            "Vite",
            "Tailwind CSS",
            "Bootstrap",
            "REST API",
            "Git",
            "Jest",
            "Cypress",
            "Testing",
            "Web Development",
            "UI/UX",
          ],
        }}
      />

      <section className="flex flex-col items-center min-h-[60vh] px-4 py-8">
        {/* Animated search box for filtering skills */}
        {showSearchBox && (
          <StaggeredList
            from="bottom"
            stagger={0.12}
            duration={0.4}
            className="w-full"
          >
            <div className="relative w-full max-w-xs mx-auto">
              <input
                type="text"
                className="bg-[#181828] text-white rounded-xl px-4 py-2 border border-cyan-400 focus:outline-none w-full pr-10"
                placeholder="Search skills..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowAll(false);
                }}
              />

              {/* Button to clear search input */}
              {query && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-200 text-xl"
                  onClick={() => {
                    setQuery("");
                    setShowAll(true);
                  }}
                  aria-label="Clear"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </StaggeredList>
        )}

        {/* "Show All" button */}
        {showShowAll && (
          <StaggeredList
            from="bottom"
            stagger={0.12}
            duration={0.4}
            className="w-full"
          >
            <button
              onClick={() => {
                setShowAll(true);
                setQuery("");
              }}
              className="mt-4 text-cyan-200 hover:text-cyan-400 font-mono text-lg transition mx-auto block"
            >
              Show All
            </button>
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
                key={query + showAll}
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
                    {skill.icon && (
                      <div className="text-4xl mb-2">{skill.icon}</div>
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
