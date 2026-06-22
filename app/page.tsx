import { Hero } from "@/src/components/home/Hero";
import { TechStack } from "@/src/components/home/TechStack";
import { FeaturedProjects } from "@/src/components/home/FeaturedProjects";
import { Milestones } from "@/src/components/home/Milestones";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Milestones />
    </>
  );
}
