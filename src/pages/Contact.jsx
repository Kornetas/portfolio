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
        description="Get in touch with Arkadiusz Rak – Full Stack Developer. Contact via LinkedIn, GitHub, or e-mail. Let's build something amazing together!"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-28 text-white text-center">
            Choose <span className="text-cyan-400">your</span> way to{" "}
            <span className="text-cyan-400">contact me</span>
          </h2>
        </StaggeredList>

        {/* Contact methods (LinkedIn, GitHub, E-mail, copy email button) */}
        <div className="w-full max-w-4xl" style={{ minHeight: "500px" }}>
          <StaggeredList
            from="bottom"
            stagger={0.3}
            className="flex flex-wrap gap-6 items-center justify-center w-full max-w-4xl"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arkadiusz-rak-807272306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none"
            >
              <FaLinkedin className="text-white text-2xl transition" />
              Linkedin
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Kornetas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none"
            >
              <FaGithub className="text-white text-2xl transition" />
              GitHub
            </a>
            {/* E-mail */}
            <a
              href="mailto:arek93r@gmail.com"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none"
            >
              <MdEmail className="text-white text-2xl transition" />
              E-mail
            </a>
            {/* Copy email button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg bg-transparent transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none relative"
            >
              {email}
            </button>
          </StaggeredList>
        </div>
      </section>
    </>
  );
}
export default Contact;
