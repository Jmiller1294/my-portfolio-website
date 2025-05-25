// pages/about.tsx
import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Data Analyst Portfolio</title>
      </Head>
      <main className="bg-gray-900 text-white min-h-screen px-6 py-12 font-mono">
        <div className="max-w-4xl mx-auto">
          {/* Hero Intro */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Hey, I’m [Your Name] 👾</h1>
            <p className="text-lg leading-relaxed">
              I’m a web developer turned aspiring data analyst based in NYC. I
              love finding patterns in chaos, uncovering insights in
              spreadsheets, and building beautiful, performant web apps. When
              I’m not coding or analyzing, you’ll find me stargazing 🌌 or
              mastering my next gaming quest 🎮.
            </p>
          </section>

          {/* Quest Log */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">🗺️ Quest Log</h2>
            <ul className="space-y-4 border-l-2 border-blue-400 pl-6">
              <li>
                <div className="text-sm text-gray-400">2018 – 2023</div>
                <div>
                  🧱 Front-End Developer – Built websites & apps using React,
                  Next.js, and Tailwind.
                </div>
              </li>
              <li>
                <div className="text-sm text-gray-400">2023</div>
                <div>
                  📊 Discovered data analysis through automating reporting at
                  work. Fell in love with Python and SQL.
                </div>
              </li>
              <li>
                <div className="text-sm text-gray-400">2024</div>
                <div>
                  🎯 Completed Google Data Analytics cert, started building
                  portfolio projects.
                </div>
              </li>
              <li>
                <div className="text-sm text-gray-400">2025</div>
                <div>
                  🚀 Now combining web dev and analytics to tell data stories.
                  Looking for my first full-time data analyst role!
                </div>
              </li>
            </ul>
          </section>

          {/* Trivia Section */}
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
      </main>
    </>
  );
}
