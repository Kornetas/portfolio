import LandingHero from "../components/LandingHero";
import FeaturedProjects from "../components/FeaturedProjects";
import ProfileShowcase from "../components/ProfileShowcase";

export default function Home() {
  return (
    <main className="bg-[#10101a] min-h-screen">
      <LandingHero />
      <ProfileShowcase />
      <FeaturedProjects />
    </main>
  );
}
