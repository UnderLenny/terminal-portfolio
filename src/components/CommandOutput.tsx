import { format } from "date-fns";
import React from "react";

interface CommandOutputProps {
  output: {
    command: string;
    time: string;
    result: React.ReactNode;
  }[];
}

const CommandOutput: React.FC<CommandOutputProps> = ({ output }) => {
  return (
    <div className="flex flex-col space-y-1">
      {output.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex between justify-between">
            <span className="text-white">{`> ${item.command}`}</span>
            <p className="text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[14px]">
              {format(new Date(item.time), "HH:mm:ss")}
            </p>
          </div>
          <div className="text-gray-400">{item.result}</div>
        </div>
      ))}
    </div>
  );
};

export default CommandOutput;
