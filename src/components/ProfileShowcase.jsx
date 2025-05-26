import { useNavigate } from "react-router-dom";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import {
  FaRocket,
  FaUniversalAccess,
  FaCubes,
  FaTools,
  FaUsers,
  FaVial,
  FaLightbulb,
  FaPuzzlePiece,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";

import avatar from "/profile.jpg";

export default function ProfileShowcase() {
  const navigate = useNavigate();

  const featureBoxes = [
    {
      icon: <FaRocket className="text-cyan-400 text-3xl mb-2" />,
      label: "Performance",
    },
    {
      icon: <FaUniversalAccess className="text-cyan-400 text-3xl mb-2" />,
      label: "Accessibility",
    },
    {
      icon: <FaCubes className="text-cyan-400 text-3xl mb-2" />,
      label: "Clean Code",
    },
    {
      icon: <FaTools className="text-cyan-400 text-3xl mb-2" />,
      label: "Tooling",
    },
    {
      icon: <FaUsers className="text-cyan-400 text-3xl mb-2" />,
      label: "Teamwork",
    },
    {
      icon: <FaVial className="text-cyan-400 text-3xl mb-2" />,
      label: "Testing",
    },
    {
      icon: <FaLightbulb className="text-cyan-400 text-3xl mb-2" />,
      label: "Agile Mindset",
    },
    {
      icon: <FaPuzzlePiece className="text-cyan-400 text-3xl mb-2" />,
      label: "Problem Solving",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto my-6 px-6 py-8 bg-[#181828] border border-cyan-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Avatar */}
      <div className="flex-1 flex justify-center items-center min-w-[200px]">
        <img
          src={avatar}
          alt="Arek"
          className="w-60 h-64 object-cover rounded-2xl shadow-lg border-2 border-cyan-500"
        />
      </div>
      {/* About + Contact */}
      <div className="flex-1 flex flex-col items-start bg-[#141425] p-4 rounded-2xl border border-cyan-400 shadow-lg max-w-xs min-w-[220px] h-full justify-between">
        <button
          onClick={() => navigate("/about")}
          className=" mb-3 w-full mt-2 px-4 py-2 bg-transparent border-2 border-pink-400 rounded-xl text-pink-400 font-bold text-sm hover:bg-pink-400 hover:text-black transition shadow-lg
  "
        >
          ABOUT ME
        </button>
        <p className="text-gray-200 mb-3 text-sm">
          Passionate{" "}
          <span className="text-cyan-400 font-semibold">
            Full Stack Web Dev
          </span>{" "}
          focused on clean code &amp; details. Building modern, scalable apps.
        </p>
        <div className="flex gap-5 mb-3">
          <FaHtml5 className="text-orange-500 text-2xl" />
          <FaCss3Alt className="text-blue-500 text-2xl" />
          <SiJavascript className="text-yellow-400 text-2xl" />
          <SiReact className="text-cyan-400 text-2xl" />
          <SiNodedotjs className="text-green-500 text-2xl" />
          <FaDatabase className="text-indigo-500 text-2xl" />
        </div>
        <button
          onClick={() => navigate("/contact")}
          className="w-full mt-2 px-4 py-2 bg-transparent border-2 border-pink-400 rounded-xl text-pink-400 font-bold text-sm hover:bg-pink-400 hover:text-black transition shadow-lg"
        >
          CONTACT
        </button>
      </div>
      {/* Feature Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {featureBoxes.map((box) => (
          <div
            key={box.label}
            className="bg-[#141425] border border-cyan-400 rounded-2xl flex flex-col items-center justify-center px-6 py-5 min-w-[120px] shadow-lg"
          >
            {box.icon}
            <div className="text-white text-lg font-semibold">{box.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
