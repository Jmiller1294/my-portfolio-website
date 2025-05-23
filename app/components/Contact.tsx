import { FunctionComponent } from "react";

interface ContactProps {
    
}
 
const Contact: FunctionComponent<ContactProps> = () => {
    return ( 
        <div className="h-auto w-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="bg-black h-1 w-10 m-2">&nbsp;</div>
            <p>
                If you would like to get in touch, feel free to reach out to me via email at:
            </p>
        </div>
    );
}
 
export default Contact;