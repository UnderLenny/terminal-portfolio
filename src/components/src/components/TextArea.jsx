import { useState, useRef, useEffect } from "react";
import UserInput from "./UserInput";
import CommandOutput from "./CommandOutput";
import About from "./commands/About";
import Skills from "./commands/Skills";
import Contact from "./commands/Contact";
import Ls from "./commands/Ls";

const TextArea = () => {
  const [output, setOutput] = useState([]);
  const ref = useRef(null);

  const executeCommand = (command) => {
    let result;
    switch (command.toLowerCase()) {
      case "ls":
        result = <Ls />;
        break;
      case "skills":
        result = <Skills />;
        break;
      case "contact":
        result = <Contact />;
        break;
      case "about":
        result = <About />;
        break;
      default:
        result = "Command not found";
    }

    const newOutput = [...output, { command, result }];
    setOutput(newOutput);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-1 bg-black bg-opacity-75 box flex flex-col h-[30rem] sm:h-[30rem] md:h-[30rem]">
      <div className="flex-1 overflow-y-auto p-5 scrollbar-hide" ref={ref}>
        <CommandOutput output={output} />
      </div>
      <UserInput onCommand={executeCommand} />
    </div>
  );
};

export default TextArea;
