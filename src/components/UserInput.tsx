import React, { ChangeEvent, FormEvent, useState } from "react";
import BaseInput from "./BaseInput";

interface UserInputProps {
  onCommand: (command: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleCommand = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onCommand(input);
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <BaseInput>
      <form className="w-full flex items-center m-0" onSubmit={handleCommand}>
        <input
          className="bg-inherit w-full focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider pt-2 text-[12px] sm:text-[12px] lg:text-[20px] 2xl:text-[20px]"
          autoFocus
          placeholder="try ls, about, skills, contacts..."
          value={input}
          onChange={handleChange}
        />
      </form>
    </BaseInput>
  );
};

export default UserInput;
