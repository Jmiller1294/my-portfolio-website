import { FunctionComponent } from "react";

interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    return ( 
        <div className="h-svh w-full flex flex-col items-center p-4 grey text-black">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="bg-black h-1 w-10 m-2">&nbsp;</div>
            <p>
                Here are some of the projects I have worked on:
            </p>
            <ul className="list-disc list-inside">
                <li>Project 1: A web application built with React and Node.js</li>
                <li>Project 2: A mobile application built with React Native</li>
                <li>Project 3: An open source library for data visualization</li>
            </ul>
        </div>
    );
}
 
export default Projects;