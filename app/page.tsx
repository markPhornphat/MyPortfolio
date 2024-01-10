import Image from "next/image";
import Link from "next/link";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/navbar/NavBar";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Project/ProjectSection";
import ContactSection from "./components/Contact/ContactSection";
import FooterSection from "./components/FooterSection";
import SkillSection from "./components/Skill/SkillSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-0">
      <NavBar />
      <div className="mx-auto max-sm:mt-24 px-12 py-4">
        <HeaderSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
