"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface BiographyProps {
  triggerRoll: (type: "animate" | "reverse-animate" | "") => void;
}

const Biography: FunctionComponent<BiographyProps> = ({ triggerRoll }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showAlt, setShowAlt] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const currentScrollTop = scrollEl.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setFadeIn(true);
        triggerRoll("animate");
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }

      setLastScrollTop(currentScrollTop);
    };

    scrollEl.addEventListener("scroll", handleScroll);

    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlt(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 30) {
        setFadeIn(true);
        triggerRoll("animate");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={`rolling-box absolute z-10 ${fadeIn ? "fade-in-bg" : ""}`}>
      <div className="rolling-box-content scrollbar-hide h-svh" ref={scrollRef}>
        <div className="text-center p-8">
          {!showAlt ? (
            <div className="flex flex-col h-svh w-swv justify-center">
              <h1 className="text-7xl font-bold">🚀 Launching...</h1>
              <p className="text-4xl text-gray-500 mb-40">
                Hang tight, data loading...
              </p>
            </div>
          ) : (
            <div className="flex flex-col h-svh w-svw justify-center">
              <TypeAnimation
                omitDeletionAnimation={true}
                sequence={["Welcome to My \n Universe! ", 1000]}
                wrapper="h1"
                cursor={true}
                speed={50}
                style={{
                  whiteSpace: "pre-line", // IMPORTANT for line breaks
                  display: "inline-block",
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              />
              <h2
                className=" text-4xl font-bold antialiased mb-40"
              >
                <span className="text-teal-300">Data Analyst</span> |{" "}
                <span className="text-teal-300">Web Developer</span>
              </h2>
            </div>
          )}
          {/* <TypeAnimation
            omitDeletionAnimation={true}
            sequence={["SELECT (name, title, bio)\n FROM database.my_life \n WHERE name = 'Justin';", 1000]}
            wrapper="span"
            cursor={true}
            speed={50}
            style={{
              whiteSpace: "pre-line", // IMPORTANT for line breaks
              display: "inline-block",
              fontSize: "3rem",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Biography;
