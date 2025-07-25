import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      {/* SEO metadata for 404 Not Found page */}
      <Seo
        title="404 Page Not Found | Arkadiusz Rak – Portfolio"
        description="Oops! This page doesn’t exist. Go back to Arkadiusz Rak portfolio and discover modern, detail-oriented web development."
        url="https://kornet.dev/404"
        canonical="https://kornet.dev/404"
      />

      {/* Main 404 error message and return home button */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-2">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 sm:mb-8 text-pink-400 text-center">
          Oh no!{" "}
          <span className="block text-6xl sm:text-8xl md:text-9xl">😱</span>
        </h1>
        <h2 className="text-lg sm:text-2xl mb-6 sm:mb-10 text-gray-300 text-center">
          This page doesn&apos;t exist.
        </h2>

        {/* Link to navigate back to the home page */}
        <Link
          to="/"
          className="px-6 py-3 sm:px-10 sm:py-4 rounded-3xl bg-pink-500 hover:bg-pink-600 text-base sm:text-xl font-bold text-white shadow-2xl transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
