import Image from "next/image";
import Link from "next/link";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/navbar/NavBar";
import AboutSection from "./components/About/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeaderSection />
        <AboutSection />
      </div>
    </main>
  );
}
