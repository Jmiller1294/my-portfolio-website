import { FunctionComponent } from "react";

const data = [
  {
    period: "2024 – PRESENT",
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
    <div className="h-auto w-full flex flex-col items-center pl-60 pr-60 pt-8">
      <h1 className="text-3xl font-bold">My Journey</h1>
      <div className="bg-white h-1 w-10 m-2 mb-10">&nbsp;</div>
      <section className="mb-12 w-full h-auto">
        <ul className="flex flex-col border-l-2 border-teal-400/50 pl-6">
          {data.map((time, index) => (
            <li key={index} className="h-48 w-full mb-2">
              <div className="text-sm text-gray-400">{time.period}</div>
              <h3></h3>
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
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
