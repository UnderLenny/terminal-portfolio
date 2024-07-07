import { useState } from "react";
import BaseInput from "./BaseInput";

const UserInput = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onCommand(input);
    setInput("");
  };

  return (
    <BaseInput>
      <form className="w-full flex items-center m-0" onSubmit={handleCommand}>
        <input
          className="bg-inherit w-full focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider pt-2"
          autoFocus
          placeholder="try ls, about, skills, contact ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </BaseInput>
  );
};

export default UserInput;
