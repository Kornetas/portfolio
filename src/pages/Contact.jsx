import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StaggeredList from "../components/StaggeredList";
import Seo from "../components/Seo";

function Contact() {
  // State for showing the "Copied to clipboard!" message
  const [copied, setCopied] = useState(false);

  const email = "arek93r@gmail.com";

  // Copies the email to clipboard and shows a notification
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2900);
  };

  return (
    <>
      <Seo
        title="Contact | Arkadiusz Rak – Full Stack Web Developer"
        description="Contact Full Stack Web Developer Arkadiusz Rak via LinkedIn, GitHub, or e-mail. Let’s build modern web projects together!"
        url="https://kornet.dev/contact"
        canonical="https://kornet.dev/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arkadiusz Rak",
          jobTitle: "Full Stack Web Developer",
          email: "arek93r@gmail.com",
          url: "https://kornet.dev/contact",
          sameAs: [
            "https://www.linkedin.com/in/arkadiusz-rak-807272306",
            "https://github.com/Kornetas",
          ],
        }}
      />

      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
        {/* "Copied to clipboard!" notification */}
        {copied && (
          <div className="fixed top-8 inset-x-0 mx-auto z-50 bg-cyan-500 text-white text-lg px-6 py-2 rounded-lg shadow-lg font-bold animate-slideDownUp w-max transition-opacity duration-300">
            Copied to clipboard!
          </div>
        )}

        {/* Section heading */}
        <StaggeredList
          from="bottom"
          duration={0.7}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-20 md:mb-28 text-white text-center">
            Choose <span className="text-cyan-400">your</span> way to{" "}
            <span className="text-cyan-400">contact me</span>
          </h2>
        </StaggeredList>

        {/* Contact methods (LinkedIn, GitHub, E-mail, copy email button) */}

        <StaggeredList
          from="bottom"
          stagger={0.3}
          className="flex flex-col px-1 md:flex-row md:flex-wrap gap-4 items-stretch md:items-center justify-center w-full"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arkadiusz-rak-807272306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start sm:justify-center gap-3 px-8 py-4 rounded-full border-[1px] border-white text-white font-bold text-[1.2rem] transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none w-full sm:w-auto"
          >
            <FaLinkedin className="text-white text-3xl transition" />
            <span className="flex-1 text-center">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Kornetas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start sm:justify-center gap-3 px-8 py-4 rounded-full border-[1px] border-white text-white font-bold text-[1.2rem] transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none w-full sm:w-auto"
          >
            <FaGithub className="text-white text-3xl transition" />
            <span className="flex-1 text-center">GitHub</span>
          </a>

          {/* E-mail */}
          <a
            href="mailto:arek93r@gmail.com"
            className="flex items-center justify-start sm:justify-center gap-3 px-8 py-4 rounded-full border-[1px] border-white text-white font-bold text-[1.2rem] transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none w-full sm:w-auto"
          >
            <MdEmail className="text-white text-3xl transition" />
            <span className="flex-1 text-center">E-mail</span>
          </a>

          {/* Copy email button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-[1px] border-white text-white font-bold text-[1.2rem] bg-transparent transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none relative w-full"
          >
            {email}
          </button>
        </StaggeredList>
      </section>
    </>
  );
}
export default Contact;
