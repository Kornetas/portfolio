import React from "react";
import avatar from "/profile.png";

// Reusable avatar component for the Hero section (desktop or mobile version)
export default function HeroAvatar({ className = "", variant = "desktop" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Avatar image, styling changes based on the variant (desktop or mobile) */}
      <img
        src={avatar}
        alt="Arkadiusz Rak – Full Stack Web Developer"
        className={
          variant === "desktop"
            ? "object-contain md:h-[80vh] md:max-h-[1050px] w-auto opacity-90 z-10 md:mt-36 select-none pointer-events-none hero-avatar-filter"
            : "object-contain max-h-[350px] w-full h-auto opacity-90 select-none pointer-events-none hero-avatar-mobile-filter"
        }
        draggable="false"
      />
      {/* Gradient overlay for the desktop variant */}
      {variant === "desktop" && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full rounded-3xl blur-3xl bg-gradient-to-br from-black/30 via-white/10 to-gray-900/40"></div>
        </div>
      )}
    </div>
  );
}
