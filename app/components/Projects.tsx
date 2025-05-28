import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    const projects = [
      {
        title: "Galaxy Sales Dashboard",
        description:
          "Analyzed sales from interstellar markets using SQL and Tableau.",
      },
      {
        title: "Black Hole Forecasting",
        description:
          "Used Python to model black hole growth patterns with time series.",
      },
      {
        title: "Alien Census Data",
        description:
          "Cleaned and visualized alien population data using Pandas.",
      },
    ];

    return (
      <div className="min-h-screen bg-black px-6 py-16">
        <h2 className="text-white text-4xl font-bold text-center mb-4">
            Projects
        </h2>
        <div className="bg-white h-1 w-10 m-2 mb-10 mr-auto ml-auto">&nbsp;</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    );
}
 
export default Projects;