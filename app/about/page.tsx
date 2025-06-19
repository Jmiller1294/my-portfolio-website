"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-y-scroll overflow-x-hidden">
      {/* Space-themed content behind the triangles */}
      <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-auto">
        <div className="flex flex-col h-svh w-full items-center pt-24">
          {/* Trivia Section */}
          <h2 className="absolute top-20 ml-auto mr-auto text-white text-4xl font-bold">
            About Me
          </h2>
          <div className="bg-white h-1 w-10 m-2 mt-8">&nbsp;</div>
          <div className="flex flex-row w-full h-svh justify-center items-center space-x-32">
            <Image
              className="w-1/3 h-2/3 rounded-full"
              height={410}
              width={410}
              src={"/IMG_8182.png"}
              alt="project"
            />
            <p className="flex flex-col max-w-xl text-lg text-gray-300 h-3/4 justify-center">
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
              Space-faring data analyst navigating galaxies of insights.
            </p>
          </div>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">✨ Fun Facts</h2>
            <ul className="list-[★] ml-5 space-y-2">
              <li>
                Favorite Game Series:{" "}
                <span className="text-blue-400">Mass Effect</span> &{" "}
                <span className="text-blue-400">Zelda</span>
              </li>
              <li>
                I own a telescope and occasionally contribute to citizen
                astronomy projects
              </li>
              <li>
                Big fan of space-themed data viz – ask me about my exoplanet
                dashboard 🌍
              </li>
              <li>Can probably beat you at Tetris (challenge accepted)</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center mt-12">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition"
            >
              📄 View My Resume
            </a>
          </section>
        </div>
      </div>
      {/* Left Triangle */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-black to-black z-30 transition-transform duration-[1500ms] ease-in-out ${
          open ? "-translate-x-full -translate-y-full" : ""
        }`}
        style={{
          clipPath: "polygon(100% 0%, 0% 100%, 0% -20%)",
        }}
      />

      {/* Right Triangle */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-900 via-black to-black z-30 transition-transform duration-[1500ms] ease-in-out ${
          open ? "translate-x-full translate-y-full" : ""
        }`}
        style={{
          clipPath: "polygon(100% 0, 0 100%, 120% 100%)",
        }}
      />
    </div>
  );
};

export default AboutPage;
