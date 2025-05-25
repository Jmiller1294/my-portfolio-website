"use client"
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FaJs } from "react-icons/fa";

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<
      "up" | "down" | null
    >(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      const handleScroll = () => {
        const currentScrollTop = scrollEl.scrollTop;
        console.log(currentScrollTop);

        if (currentScrollTop > lastScrollTop) {
          triggerRoll();
          setScrollDirection("down");
        } else if (currentScrollTop < lastScrollTop) {
          setScrollDirection("up");
        }

        setLastScrollTop(currentScrollTop);
      };

      scrollEl.addEventListener("scroll", handleScroll);

      return () => scrollEl.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);
    return (
      <div className="flex flex-col justify-center items-center w-full h-svh">
        <h1 className="text-3xl font-bold">Skills</h1>
        <div className="bg-black h-1 w-10 m-2">&nbsp;</div>
        <ul className="grid grid-cols-5 gap-20">
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
          <li className="flex flex-col items-center">
            <FaJs size={60} />
            <span className="text-sm">JavaScript</span>
          </li>
        </ul>
      </div>
    );
}
 
export default Skills;