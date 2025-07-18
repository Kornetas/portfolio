import { useRef, useEffect, useState } from "react";
import { skills, skillsNoIcon } from "../assets/mySkills";
import StaggeredList from "../components/StaggeredList";
import Seo from "../components/Seo";
import { FaTimes, FaCubes } from "react-icons/fa";

// Combine all skills into one array for easier filtering/search
const allSkills = [
  ...skills,
  ...skillsNoIcon.map((name) => ({ name, icon: null })),
];

export default function Skills() {
  // State to store search query
  const [query, setQuery] = useState("");

  // Controls the appearance of the search box (animated)
  const [showSearchBox, setShowSearchBox] = useState(false);

  // Controls the appearance of the skills grid (animated)
  const [showSkills, setShowSkills] = useState(false);

  // Ref to keep track if the animation has already happened (to prevent repeating)
  const hasAnimated = useRef(false);

  // Run entrance animations with delay when component mounts
  useEffect(() => {
    const t1 = setTimeout(() => setShowSearchBox(true), 400);
    const t2 = setTimeout(() => setShowSkills(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Set flag so animation plays only on the initial render
  useEffect(() => {
    if (showSkills) hasAnimated.current = true;
  }, [showSkills]);

  // Filter the skills based on user input in the search box
  const filteredSkills = allSkills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* SEO metadata for the page */}
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
              {/* Controlled input for filtering skills */}
              <input
                type="text"
                name="skills-search"
                id="skills-search"
                className="bg-[#181828] text-white rounded-xl px-4 py-2 border border-cyan-400 focus:outline-none w-full pr-10"
                placeholder="Search skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {/* Button to clear the search input (visible only when user types) */}
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

        {/* Main grid: displays skill cards or a message if nothing matches */}
        <div className="relative flex flex-col justify-center items-center w-full min-h-[200px] max-w-6xl">
          {showSkills &&
            (filteredSkills.length === 0 ? (
              <div className="text-red-600 text-lg font-semibold py-8 text-center mt-[-100px]">
                Sorry, I don’t know this skill yet – but I’m always learning and
                leveling up!
              </div>
            ) : (
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
                    {/* Render skill icon if available, otherwise fallback icon */}
                    <div className="text-4xl mb-2">
                      {skill.icon ? (
                        skill.icon
                      ) : (
                        <FaCubes className="text-blue-400" />
                      )}
                    </div>
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
