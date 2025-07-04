"use client"
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

interface ContentProps {
  triggerRoll: (type: "animate" | "reverse-animate" | "") => void;
}

const Content: FunctionComponent<ContentProps> = ({ triggerRoll }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const currentScrollTop = scrollEl.scrollTop;
      console.log(currentScrollTop);

      if(currentScrollTop === 0) triggerRoll("reverse-animate");

      // if (currentScrollTop > lastScrollTop) {
      //   triggerRoll();
      //   setScrollDirection("down");
      // } else if (currentScrollTop < lastScrollTop) {
      //   setScrollDirection("up");
      // }

      setLastScrollTop(currentScrollTop);
    };

    scrollEl.addEventListener("scroll", handleScroll);

    return () => scrollEl.removeEventListener("scroll", handleScroll);
    
  }, [lastScrollTop]);

  useEffect(() => {
    //  const scrollEl = scrollRef.current;
    //  if (!scrollEl) return;

    const handleWheel = (e: WheelEvent) => {
      console.log("delta:", e.deltaY, scrollRef.current?.scrollTop);
      if (e.deltaY < -30 && scrollRef.current?.scrollTop === 0) {
        triggerRoll("reverse-animate");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="bg-primary box">
      <div className="box-content" ref={scrollRef}>
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </div>
  );
};

export default Content;