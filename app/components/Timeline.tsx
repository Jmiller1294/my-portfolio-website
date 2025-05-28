import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const data = [
  {
    period: "2024 – PRESENT",
    title: "Engineer",
    description: (
      <p className="mt-2 mb-3 text-sm leading-normal">
        Build and maintain critical components used to construct Klaviyo’s
        frontend, across the whole product. Work closely with cross-functional
        teams, including developers, designers, and product managers, to
        implement and advocate for best practices in web accessibility.
      </p>
    ),
    skills: [
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
  },
  {
    period: "2023-2024",
    title: "Engineer",
    description: (
      <p className="mt-2 mb-3 text-sm leading-normal">
        Build and maintain critical components used to construct Klaviyo’s
        frontend, across the whole product. Work closely with cross-functional
        teams, including developers, designers, and product managers, to
        implement and advocate for best practices in web accessibility.
      </p>
    ),
    skills: [
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
  },
  {
    period: "2022-2022",
    title: "Engineer",
    description: (
      <p className="mt-2 mb-3 text-sm leading-normal">
        Build and maintain critical components used to construct Klaviyo’s
        frontend, across the whole product. Work closely with cross-functional
        teams, including developers, designers, and product managers, to
        implement and advocate for best practices in web accessibility.
      </p>
    ),
    skills: [
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
  },
  {
    period: "2022-2022",
    title: "Engineer",
    description: (
      <p className="mt-2 mb-3 text-sm leading-normal">
        Build and maintain critical components used to construct Klaviyo’s
        frontend, across the whole product. Work closely with cross-functional
        teams, including developers, designers, and product managers, to
        implement and advocate for best practices in web accessibility.
      </p>
    ),
    skills: [
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
  },
];

interface TimelineProps {}

const Timeline: FunctionComponent<TimelineProps> = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center px-6 md:px-24 lg:px-60 pt-10  text-white">
      <h1 className="text-3xl font-bold">My Journey</h1>
      <div className="bg-white h-1 w-10 m-2 mb-16">&nbsp;</div>
      <section className="mb-12 w-full h-full">
        <ul className="flex flex-col border-l-2 border-teal-400/50 pl-6 h-fit w-full">
          {data.map((time, index) => (
            <motion.li
              key={index}
              className="relative h-72 w-full mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[33px] top-1.2 h-4 w-4 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(45,212,191,0.7)]"></span>
              <div className="text-sm/none text-gray-400">{time.period}</div>
              <h3 className="text-lg/9 font-semibold text-white mb-1">
                {time.title}
              </h3>
              {time.description}
              <ul className="flex flex-row h-fit w-full flex-wrap">
                {time.skills.map((skill, index) => (
                  <li key={index} className="h-7 mr-2 mb-2">
                    <div className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
