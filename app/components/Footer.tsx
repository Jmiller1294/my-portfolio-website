"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm w-svw py-8 flex flex-col items-center mt-0">
      {/* Starry background overlay (optional, subtle twinkle effect) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black animate-pulse opacity-20 pointer-events-none"></div>

      <div className="z-10 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-teal-300 drop-shadow-md">
          Thanks for visiting my space!
        </h2>

        <p className="text-gray-400 mt-2">
          Designed & developed by [Your Name], aspiring Data Analyst 💫
        </p>

        <div className="flex items-center justify-center gap-6 mt-4 text-xl text-white">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-teal-400 transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-teal-400 transition duration-300" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="hover:text-teal-400 transition duration-300" />
          </a>
        </div>
        <p className="text-gray-600 mt-4 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
