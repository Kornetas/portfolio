import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StaggeredList from "../components/StaggeredList";
import Seo from "../components/Seo";

export default function About() {
  // State to control the fade-in animation of content boxes
  const [showBoxes, setShowBoxes] = useState(false);

  // Show the boxes after a delay for a smooth entrance animation
  useEffect(() => {
    const timeout = setTimeout(() => setShowBoxes(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Seo
        title="About | Arkadiusz Rak – Full Stack Web Developer"
        description="Learn about Arkadiusz Rak journey from logistics to web development, his education at BloomTech, coding approach, skills, and tech passions."
        url="https://kornet.dev/about"
        canonical="https://kornet.dev/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arkadiusz Rak",
          jobTitle: "Full Stack Web Developer",
          url: "https://kornet.dev/about",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "BloomTech Institute of Technology",
            url: "https://www.bloomtech.com/courses/full-stack-web-development",
          },
        }}
      />

      <section className="flex flex-col items-center min-h-[80vh] px-2 py-10">
        {/* Section header with animation */}
        <StaggeredList
          from="bottom"
          stagger={0.3}
          duration={0.5}
          className="w-full flex flex-col items-center"
        >
          <h1 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            About Me
          </h1>
          <div className="mx-auto my-4 h-1 sm:w-24 w-12 bg-cyan-400 rounded-full" />
          <p className="tex-sm sm:text-xl text-gray-300 mb-4 text-center">
            Get to know more about my background, skills, and educational
            journey
          </p>
        </StaggeredList>

        {/* Fade-in animated content boxes */}
        <div
          className={`w-full max-w-5xl flex flex-col gap-8 mt-8 transition-opacity duration-700 ${
            showBoxes ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ minHeight: "1150px" }}
        >
          {/* Main content with staggered reveal */}
          <StaggeredList
            from="bottom"
            stagger={0.5}
            duration={0.6}
            className="w-full flex flex-col gap-8"
          >
            {/* Education and Experience section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg p-7 flex flex-col">
                {/* How I Became a Full Stack Web Dev */}
                <h2 className="text-[1.2em] sm:text-[1.3em] md:text-2xl text-white font-bold mb-2">
                  How I Became a Full Stack Web Dev
                </h2>
                <p className="text-gray-200 text-base mb-4">
                  My adventure in web development began with a single thought:{" "}
                  <span className="italic text-cyan-400">
                    "How are websites built?"
                  </span>
                  <br />
                  <br />
                  Driven by this curiosity, I explored both front-end and
                  back-end technologies, building practical projects along the
                  way. At{" "}
                  <a
                    href="https://www.bloomtech.com/courses/full-stack-web-development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <span className="font-semibold text-cyan-400 transition-all duration-200 hover:scale-110 hover:text-cyan-300 hover:underline hover:underline-offset-4">
                      BloomTech
                    </span>
                  </a>
                  , I gained hands-on experience with modern frameworks and
                  essential tools that power today’s web applications:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-skill">JavaScript</span>
                  <span className="badge-skill">React</span>
                  <span className="badge-skill">Node.js</span>
                  <span className="badge-skill">Express</span>
                  <span className="badge-skill">SQL</span>
                </div>
                <Link
                  to="/skills"
                  className="inline-block font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-transform duration-300 hover:scale-105"
                >
                  Check out all my technical skills here
                </Link>
              </div>

              <div className="bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg p-7 flex flex-col">
                {/* Experience - Logistics Operative */}
                <h2 className="text-[1.2em] sm:text-[1.3em] md:text-2xl text-white font-bold mb-2">
                  Experience - Logistics Operative
                </h2>
                <p className="text-gray-200 text-base mb-4">
                  Worked in high-volume facilities across the 2016 (UK),
                  2018–2024 (Germany, seasonal) , gaining practical experience
                  in fast-paced logistics environments:
                </p>
                <ul className="list-disc ml-6 text-gray-300 text-base mb-3">
                  <li>
                    <span className="text-cyan-400 font-medium">Teamwork</span>:
                    Cooperated with diverse teams to meet tight deadlines.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Adaptability
                    </span>
                    : Adjusted quickly to new environments and languages.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Reliability
                    </span>
                    : Maintained high standards of accuracy and consistency.
                  </li>
                </ul>
                <p className="text-gray-400 text-sm">
                  These skills now help me stay organized, adaptable, and
                  focused on quality in my development projects.
                </p>
              </div>
            </div>

            {/* Certificate section */}
            <div className="bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg p-7 flex flex-col">
              {/* Certificate in Full Stack Web Development */}
              <h2 className="text-[1.2em] sm:text-[1.3em] md:text-2xl text-white font-bold mb-3">
                Certificate in Full Stack Web Development & Technical
                Interviewing
              </h2>
              <div className="text-gray-300 text-1xl mb-3">
                <a
                  href="https://www.bloomtech.com/courses/full-stack-web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-transform duration-300 mb-2"
                >
                  BloomTech - Institute of Technology | 12-Month Immersive
                  Online Coding Bootcamp
                </a>
                <span className="ml-2 text-gray-300">| 2025</span>
                <span className="block mt-1 mb-5">
                  A comprehensive certification proving expertise in modern web
                  development technologies and technical interviewing.
                  <br />
                  <span>
                    Earned by passing rigorous technical assessments, building
                    full-stack applications, completing an advanced curriculum
                    in computer science, and delivering collaborative,
                    real-world projects at BloomTech Labs that reflect modern
                    industry standards.
                  </span>
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center rounded-xl overflow-hidden">
                {/* On desktop/tablet: show certificate PDF in iframe */}
                <iframe
                  src="/BloomTech Certificate.pdf"
                  title="BloomTech Certificate"
                  className="hidden xl:block w-full min-h-[340px] md:min-h-[500px] lg:min-h-[790px] aspect-video rounded-xl border-none"
                  style={{ maxWidth: "100%" }}
                ></iframe>

                {/* On mobile: show certificate image */}
                <img
                  src="/Certificate.png"
                  alt="Certificate"
                  className="block xl:hidden w-full max-w-full h-auto rounded-xl"
                />

                {/* Link to View the PDF certificate */}
                <a
                  href="/BloomTech Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-cyan-400 underline underline-offset-4 block text-center hover:text-cyan-300 transition"
                >
                  View certificate (PDF)
                </a>
              </div>
            </div>

            {/* Two-column section: Other interests and approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg p-7 flex flex-col">
                <h2 className="text-[1.2em] sm:text-[1.3em] md:text-2xl text-white font-bold mb-2">
                  When I’m Not Coding
                </h2>
                <p className="text-gray-200 text-base mb-4">
                  When I’m not coding, I’m always looking for new ways to grow
                  and stay active. My free time is all about recharging and
                  trying new things:
                </p>
                <ul className="list-disc ml-6 text-gray-300 text-base mb-3">
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Learning English
                    </span>
                    : Constantly improving my communication skills for both work
                    and life.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Tech Curiosity
                    </span>
                    : Exploring the latest tech trends and testing out new tools
                    just for fun.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Team Sports & Gaming
                    </span>
                    : I enjoy playing team games that keep me competitive and
                    social.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">
                      Staying Active
                    </span>
                    : Regular walks and cycling help me clear my mind and stay
                    energized.
                  </li>
                  <li>
                    <span className="text-cyan-400 font-medium">Music</span>:
                    Listening to music is my go-to way to relax and recharge.
                  </li>
                </ul>
              </div>

              <div className="bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg p-7 flex flex-col">
                {/* My Approach to Development */}
                <h2 className="text-[1.2em] sm:text-[1.3em] md:text-2xl text-white font-bold mb-2">
                  My Approach to Development
                </h2>
                <p className="text-gray-200 text-base">
                  I’m driven by the challenge of solving complex problems with
                  clean, efficient solutions. Whether it’s designing an
                  intuitive user interface or building a powerful back-end, I
                  always aim to deliver applications that not only work well but
                  also delight users. I believe that great code is just the
                  beginning—what really matters is the experience it creates.
                  That’s why I put the user at the center of every project,
                  focus on maintainability, and never stop learning new
                  approaches or technologies. For me, web development is about
                  turning big ideas into practical, accessible, and enjoyable
                  digital products—while having some fun along the way.
                </p>
              </div>
            </div>
          </StaggeredList>
        </div>
      </section>
    </>
  );
}
