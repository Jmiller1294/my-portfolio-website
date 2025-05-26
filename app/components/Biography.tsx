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
      console.log("Current Scroll Top:", currentScrollTop);

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

  return (
    <div
      className={`rolling-box absolute z-10 ${fadeIn ? "fade-in-bg" : ""}`}
      onClick={() => setFadeIn(true)}
    >
      <div className="rolling-box-content scrollbar-hide" ref={scrollRef}>
        <div className="text-center p-8">
          {!showAlt ? (
            <div className="flex flex-col h-[90vh] w-full justify-center">
              <h1 className="text-7xl font-bold">🚀 Launching...</h1>
              <p className="text-4xl text-gray-500">
                Hang tight, data loading...
              </p>
            </div>
          ) : (
            <div className="flex flex-col h-[93vh] w-full justify-center">
              <h1 className="text-7xl font-bold">Welcome to my Galaxy!</h1>
              <p className="text-4xl text-gray-500 font-raleway">
                You’ve entered my world of data & discovery.
              </p>
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
          {/* <h1 className="text-8xl font-bold mb-4 antialiased z-12">
            Hi, Im{" "}
            <span className="text-teal-300">
              {"{"}Justin{"}"}
            </span>
          </h1>
          <h2 className=" text-4xl font-bold mb-4 antialiased">
            <span className="text-teal-300">Web Developer</span> |{" "}
            <span className="text-teal-300">Aspiring Data Analyst</span>
             "Hi, I'm {Justin} \nWeb Developer \nAspiring Data Analyst",
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Biography;
