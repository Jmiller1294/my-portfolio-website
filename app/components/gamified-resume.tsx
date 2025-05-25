import React from "react";

const attributes = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Data Visualization", level: 80 },
  { name: "Next.js", level: 70 },
];

const tools = ["Jupyter", "Tableau", "Excel", "Pandas", "React"];

export default function GamifiedResume() {
  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen font-mono">
      <h1 className="text-4xl mb-4">🧙‍♂️ Data Explorer – Level 5</h1>
      <section className="mb-6">
        <h2 className="text-2xl underline">Attributes</h2>
        {attributes.map((attr) => (
          <div key={attr.name} className="mb-2">
            <p>{attr.name}</p>
            <div className="bg-gray-700 h-3 w-full rounded">
              <div
                className="bg-blue-400 h-3 rounded"
                style={{ width: `${attr.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl underline">Equipment</h2>
        <ul className="list-disc ml-5">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl underline">Perks</h2>
        <ul className="ml-5 list-[🪄]">
          <li>Google Data Analytics Cert</li>
          <li>Speedrun-ready SQL</li>
          <li>Fluent in data storytelling</li>
        </ul>
      </section>
    </main>
  );
}
