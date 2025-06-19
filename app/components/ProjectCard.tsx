import Image from "next/image";
export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        h-fit w-full float bg-gray-800 
        bg-opacity-40 backdrop-blur-sm text-white 
        rounded-xl shadow-lg transition-transform 
        duration-300 hover:shadow-lime-950 
        hover:cursor-pointer
        border-white/10 text-center
        pb-4
      "
    >
      <Image
        className="w-full rounded-t-xl mb-2"
        height={300}
        width={300}
        src={"/hero.png"}
        alt="project"
      />
      <h3 className="text-xl pr-2 pl-2 font-semibold">{title}</h3>
      <p className="h-1/3 p-2 text-sm mt-2 text-gray-300">{description}</p>
      <div className="w-full h-1/6">
        <button className="bg-teal-300 hover:bg-teal-400 text-black font-bold py-2 px-6 rounded-md shadow-[0_0_10px_#00f2ff] transition duration-300">
          <span className="">Learn More</span>
        </button>
      </div>
    </div>
  );
}
