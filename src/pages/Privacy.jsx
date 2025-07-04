import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy & Legal</h1>
      <p>
        This website uses cookies (Google Analytics) and may contain external
        links. No personal data is collected except for anonymous analytics.
        <br />
        <br />
        By using this website, you accept our privacy policy. For any questions,
        contact me at{" "}
        <a href="mailto:arek93r@gmail.com" className="text-cyan-400 underline">
          arek93r@gmail.com
        </a>
      </p>
      <Link
        to="/"
        className="inline-block mt-10 mx-auto px-6 py-3 sm:px-10 sm:py-4 rounded-3xl bg-blue-700 hover:bg-blue-500 text-base sm:text-xl font-bold text-white shadow-2xl transition-all text-center"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
