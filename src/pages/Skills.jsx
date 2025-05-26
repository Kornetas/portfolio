import { useState } from "react";
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
  SiRemix,
  SiVite,
  SiExpo,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiKnexdotjs,
  SiFirebase,
  SiJest,
  SiMocha,
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
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Axios", icon: <SiAxios className="text-sky-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Yup", icon: <SiPyup className="text-yellow-700" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Remix", icon: <SiRemix className="text-black dark:text-white" /> },
  { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "RESTful API", icon: <FaDatabase className="text-blue-300" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
  { name: "Knex.js", icon: <SiKnexdotjs className="text-orange-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Mocha", icon: <SiMocha className="text-brown-700" /> },
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
  { name: "Heroku", icon: <SiHeroku className="text-purple-800" /> },
  {
    name: "Railway",
    icon: <SiRailway className="text-black dark:text-white" />,
  },
  { name: "Render", icon: <SiRender className="text-blue-400" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
];

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

const allSkills = [
  ...skills,
  ...skillsNoIcon.map((name) => ({
    name,
    icon: null,
  })),
];

function Skills() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Przefiltruj skille po nazwie (niezależnie od wielkości liter)
  const filteredSkills = showAll
    ? allSkills
    : allSkills.filter((skill) =>
        skill.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <section className="flex flex-col items-center min-h-[60vh] px-4 py-8">
      {/* Search box */}
      <div className="relative w-full max-w-xs">
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

      <button
        onClick={() => {
          setShowAll(true);
          setQuery("");
        }}
        className="mt-2 text-cyan-200 hover:text-cyan-400 font-mono text-lg transition"
      >
        Show All
      </button>
      <div className="relative flex flex-col justify-center items-center w-full min-h-[200px] max-w-6xl">
        {filteredSkills.length === 0 ? (
          <div className="text-red-600 text-lg font-semibold py-8 text-center mt-[-100px]">
            Sorry, I don’t know this skill yet – but I’m always learning and
            leveling up!
          </div>
        ) : (
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
                {skill.icon && (
                  <div className="text-4xl mb-2">{skill.icon}</div>
                )}
                <div className="text-white font-medium text-center text-sm">
                  {skill.name}
                </div>
              </div>
            ))}
          </StaggeredList>
        )}
      </div>
    </section>
  );
}
export default Skills;
