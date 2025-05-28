"use client"
import { FunctionComponent } from "react";
import { FaJs } from "react-icons/fa";
import SkillConstellation from "./SkillConstellation";

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-svh">
        <h2 className="absolute top-20 ml-auto mr-auto text-white text-4xl font-bold z-10">
          Skills
        </h2>
        <div className="absolute top-32 bg-white h-1 w-10 ml-auto mr-auto z-10">
          &nbsp;
        </div>
        <SkillConstellation />
      </div>
    );
}
 
export default Skills;