import React from "react";
import { useNavigate } from "react-router-dom";
import StaggeredList from "../components/StaggeredList";
import avatar from "/profile.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden w-full">
      <section className="hero-section relative w-full flex flex-col-reverse md:flex-row md:min-h-screen">
        {/* Screen (desktop only) */}
        <StaggeredList
          from="bottom"
          stagger={1}
          duration={0.5}
          delay={0.3}
          className="relative w-full md:w-2/4 items-center justify-center py-8 md:py-0 hidden md:flex md:-mt-32"
        >
          <img
            src={avatar}
            alt="Arek"
            className="
              object-contain
              md:h-[80vh] md:max-h-[1050px]
              w-auto
              opacity-90
              z-10
              select-none
              pointer-events-none
              hero-avatar-filter
            "
            draggable="false"
          />
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full rounded-3xl blur-2xl bg-gradient-to-br from-black/30 via-white/10 to-gray-900/40"></div>
          </div>
        </StaggeredList>

        {/* (mobile) */}
        <div className="hero-text w-full md:w-2/4 flex flex-col justify-center items-center md:items-start px-4 sm:px-10 md:pl-20 z-10 pb-12 md:pb-0 pt-8 md:pt-0">
          <StaggeredList
            from="bottom"
            stagger={0.5}
            duration={1}
            className="w-full flex flex-col items-center md:items-start"
          >
            <h1 className="text-white font-extrabold mb-3 sm:mb-1 leading-tight text-center md:text-left text-[clamp(2.5rem,7vw,5rem)]">
              Arkadiusz Rak
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-cyan-400 mb-2 text-center md:text-left">
              Full Stack Web Developer
            </h2>

            {/* photo mobile */}
            <div className="w-full flex justify-center my-4 md:hidden">
              <img
                src={avatar}
                alt="Arek"
                className="
                  object-contain
                  h-[38vh] xs:h-[45vh] sm:h-[52vh] max-h-[350px]
                  w-auto
                  opacity-90
                  select-none
                  pointer-events-none
                  hero-avatar-mobile-filter
                "
                draggable="false"
              />
            </div>

            <p className="text-gray-200 md:text-xl sm:text-lg max-w-xl mb-1 text-center md:text-left">
              With a passion for detail.
            </p>

            <p className="text-red-600 md:text-xl sm:text-lg max-w-xl mb-4 text-center md:text-left">
              Modern code, fresh design, and constant learning are my fuel.
            </p>

            <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row items-center md:items-start">
              {/* DOWNLOAD */}
              <a
                href="/CV.pdf"
                download
                className="mt-4 px-10 py-5 border-2 border-pink-500 rounded-xl text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition shadow-lg animate-bounce"
              >
                Download Resume (CV)
              </a>
              {/* ROUTE */}
              <button
                onClick={() => navigate("/contact")}
                className="mt-2 px-8 py-3 rounded-xl font-bold border-2 border-cyan-400 text-cyan-400 shadow-xl hover:bg-cyan-400 hover:text-[#181828] transition text-lg"
                type="button"
              >
                Let's Talk
              </button>
            </div>
          </StaggeredList>
        </div>
      </section>
    </div>
  );
}
