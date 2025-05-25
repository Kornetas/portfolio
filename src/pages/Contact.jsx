import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-white text-center">
        Choose <span className="text-green-400">your</span> way to{" "}
        <span className="text-green-400">contact me</span>
      </h2>
      <div className="flex flex-wrap gap-6 items-center justify-center w-full max-w-4xl">
        <a
          href="https://www.linkedin.com/in/arkadiusz-rak-807272306/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <FaLinkedin className="text-white text-2xl transition group-hover:text-green-400" />
          Linkedin
        </a>
        <a
          href="https://github.com/Kornetas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <FaGithub className="text-white text-2xl transition group-hover:text-green-400" />
          GitHub
        </a>
        <a
          href="mailto:contact@arek93r@gmail.com"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <MdEmail className="text-white text-2xl transition group-hover:text-green-400" />
          E-mail
        </a>
        <span className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg bg-transparent select-all transition hover:border-green-400 hover:text-green-400 focus:outline-none">
          arek93r@gmail.com
        </span>
      </div>
    </section>
  );
}
export default Contact;
