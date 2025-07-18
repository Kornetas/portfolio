import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// PrivacyBanner component shows a privacy/cookie info banner at the bottom of the site
export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  // Show banner only if the user has not yet accepted privacy terms
  useEffect(() => {
    if (!localStorage.getItem("privacyAccepted")) {
      setVisible(true);
    }
  }, []);

  // When user clicks "OK", hide banner and remember their choice
  const handleAccept = () => {
    localStorage.setItem("privacyAccepted", "true");
    setVisible(false);
  };

  // Don't render anything if the banner is not visible
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-2xl bg-gray-800 text-white rounded-lg shadow-xl px-6 py-4 flex items-center justify-between z-50 border border-cyan-400">
      {/* Privacy message with a link to full privacy policy */}
      <div>
        This website uses Google Analytics and external links. By continuing,
        you accept our{" "}
        <Link
          to="/privacy"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          Privacy & Legal
        </Link>
        .
      </div>
      {/* Button to accept privacy terms and close the banner */}
      <button
        onClick={handleAccept}
        className="ml-6 px-5 py-2 rounded bg-cyan-400 text-gray-900 font-bold hover:bg-cyan-300 transition"
      >
        OK
      </button>
    </div>
  );
}
