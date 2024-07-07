import { useState } from "react";
import UserInput from "./UserInput";
import CommandOutput from "./CommandOutput";
import About from "./commands/About";
import Skills from "./commands/Skills";

const TextArea = () => {
  const [output, setOutput] = useState([]);

  const executeCommand = (command) => {
    let result;
    switch (command.toLowerCase()) {
      case "ls":
        result = "portfolio, bio, skills, contact, about";
        break;
      case "skills":
        result = <Skills />;
        break;
      case "contact":
        result = "leonid@example.com";
        break;
      case "about":
        result = <About />;
        break;
      default:
        result = "Команда не найдена";
    }

    const newOutput = [...output, { command, result }];
    setOutput(newOutput);
  };

  return (
    <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-1 bg-black bg-opacity-75 box flex flex-col h-[30rem]">
      {" "}
      <div className="flex-1 overflow-y-auto p-5">
        <CommandOutput output={output} />
      </div>
      <UserInput onCommand={executeCommand} />
    </div>
  );
};

export default TextArea;
