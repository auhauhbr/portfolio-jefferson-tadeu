import { Hero } from "@/src/components/home/Hero";
import { TechStack } from "@/src/components/home/TechStack";
import { FeaturedProjects } from "@/src/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}
