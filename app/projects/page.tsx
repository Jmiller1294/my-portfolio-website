"use client"
import React from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "StellarStore",
    description:
      "An e-commerce platform built with Next.js, Tailwind, and Stripe.",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    demoLink: "https://stellarstore.vercel.app",
    codeLink: "https://github.com/username/stellarstore",
  },
  {
    name: "Orbital Analytics",
    description: "Data dashboards with D3.js and custom space-themed graphs.",
    tech: ["React", "D3.js", "Framer Motion"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    name: "AlienMessenger",
    description: "Real-time chat using Socket.io, Express, and React.",
    tech: ["React", "Socket.io", "Node.js"],
    demoLink: "#",
    codeLink: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen h-auto w-full bg-black text-white p-8 pt-20">
      <h1 className="text-4xl font-bold text-center tracking-widest">
        PROJECTS
      </h1>
      <div className="bg-white h-1 w-10 mt-2 mr-auto ml-auto mb-10">&nbsp;</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="transition-transform duration-300"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500 shadow-xl hover:shadow-blue-500/40">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-400">
                    {project.name}
                  </h2>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 border border-blue-400 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between gap-2 mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-white"
                    >
                      Launch <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-white"
                    >
                      Code <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;

