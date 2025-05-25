import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-36 h-36 rounded-full border-4 border-neon-green shadow-lg mb-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Arkadiusz Rak
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-neon-green mb-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        Passionate about clean code & real-world solutions
      </motion.p>
      <motion.a
        href="/CV.pdf"
        download
        className="bg-neon-green text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-neon-glow transition hover:scale-105 active:scale-95"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        Download Resume (CV)
      </motion.a>
    </section>
  );
}
export default Home;
