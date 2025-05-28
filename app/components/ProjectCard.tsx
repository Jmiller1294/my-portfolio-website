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
        h-96 w-full float bg-gray-800 
        bg-opacity-40 backdrop-blur-sm text-white 
        rounded-xl shadow-lg transition-transform 
        duration-300 hover:shadow-lime-950 
        hover:cursor-pointer
        border-white/10 text-center
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
      <p className="h-1/6 p-2 text-sm mt-2 text-gray-300">{description}</p>
      <div className="w-full h-1/6">
        <button className="h-full w-3/4 rounded-xl bg-teal-400/10">
          <span className=" text-teal-300">Learn More</span>
        </button>
      </div>
    </div>
  );
}
