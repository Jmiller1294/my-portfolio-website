import { FunctionComponent } from "react";

interface TimelineProps {
    
}
 
const Timeline: FunctionComponent<TimelineProps> = () => {
    return ( 
        <div className="h-auto w-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold">Timeline</h1>
            <div className="bg-black h-1 w-10 m-2">&nbsp;</div>
            <p>
                Here is a timeline of my career:
            </p>
            <ul className="list-disc list-inside">
                <li>2020: Started my career as a software engineer</li>
                <li>2021: Joined a startup as a full-stack developer</li>
                <li>2022: Contributed to several open source projects</li>
                <li>2023: Currently working at a tech company as a senior developer</li>
            </ul>
        </div>
    );
}
 
export default Timeline;