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
