import { FunctionComponent } from "react";

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    return ( 
        <div className="h-auto w-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold">Skills</h1>
            <div className="bg-black h-1 w-10 m-2">&nbsp;</div>
            <p>
                I have experience in various programming languages and frameworks, including:
            </p>
            <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Django</li>
            </ul>
        </div>
    );
}
 
export default Skills;