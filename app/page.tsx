"use client";
import Link from "next/link";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Content from "./components/Content";
import GamifiedResume from "./components/gamified-resume";

export default function Home() {
  const [animationType, setAnimationType] = useState<string>("");
  const [initialRender, setInitialrender] = useState<boolean>(true);

  const triggerRoll = (type: string) => {
      console.log("triggerRoll called with animation:", type);
    
      setAnimationType(type);
   
  };
 

  return (
    <div className="h-auto w-full relative font-[family-name:var(--font-geist-sans)]">
      <nav className="flex flex-row h-auto w-full items-center text-white absolute top-0 z-50 p-6">
        <div>
          <h1 className="font-extrabold text-slate-200 text-2xl relative left-0">
            Justin Miller
          </h1>
        </div>
        <div className="flex flex-row gap-4 ml-auto">
          <Link
            href="/about"
            className="text-md text-slate-200 font-bold uppercase"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-md text-slate-200 hover:text-white font-bold uppercase"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-md text-slate-200 hover:text-white font-bold uppercase"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-md  text-slate-200 hover:text-white font-bold uppercase"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-md text-slate-200 hover:text-white font-bold uppercase"
          >
            Contact
          </Link>
        </div>
      </nav>
      <main className="flex flex-col h-auto w-full">
        <div
          className={`fullscreen ${animationType
          }`}
        >
          <Biography triggerRoll={triggerRoll} />
          <Content triggerRoll={triggerRoll} />
        </div>
      </main>
    </div>
  );
}
