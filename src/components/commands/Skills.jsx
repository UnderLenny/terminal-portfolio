import {
  SiTypescript,
  SiNestjs,
  SiReact,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="text-lg text-white-500 px-8">
      <ul className={"p-2 text-[20px] sm:text-[12px] lg:text-[20px]"}>
        <li className={"p-2 flex items-center gap-2"}>
          <SiTypescript />
          Typescript
        </li>
        <li className={"p-2 flex items-center gap-2"}>
          <SiExpress />
          Express.js
        </li>
        <li className={"p-2 flex items-center gap-2"}>
          <SiNestjs />
          Nest.js
        </li>
        <li className={"p-2 flex items-center gap-2"}>
          <SiReact />
          React, React Native
        </li>
        <li className={"p-2 flex items-center gap-2"}>
          <SiNextdotjs />
          Next.js
        </li>
      </ul>
    </div>
  );
};

export default Skills;
