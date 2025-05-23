import { FunctionComponent } from "react";

interface BiographyProps {
    
}
 
const Biography: FunctionComponent<BiographyProps> = () => {
    return (  
        <div className="h-auto w-full flex flex-col justify-center p-10">
            <h1 className="text-3xl font-bold mb-4">Hi, Im Justin</h1>
            <h2 className="text-2xl font-bold mb-4">Aspiring Data Analyst</h2>
            <p className="h-auto w-1/2 mb-4">
                I am an aspiring <span className="font-bold">Data Analyst </span> 
                and current <span className="font-bold">Web Developer </span> 
                with a passion for building web applications. 
                I have experience in various programming languages and frameworks, 
                and I enjoy learning new technologies.
            </p>
            <button className="w-40 bg-blue-500 text-white px-4 py-2 rounded">
                <a href="/projects">View Projects</a>
            </button>
        </div>
    );
}
 
export default Biography;