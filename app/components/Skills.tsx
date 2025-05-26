"use client"
import { FunctionComponent } from "react";
import { FaJs } from "react-icons/fa";
import SkillConstellation from "./SkillConstellation";

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-svh">
       <SkillConstellation />
      </div>
    );
}
 
export default Skills;