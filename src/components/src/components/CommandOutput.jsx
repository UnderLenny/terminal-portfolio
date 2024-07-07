const CommandOutput = ({ output }) => {
  return (
    <div className="flex flex-col space-y-1">
      {output.map((item, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-white">{`> ${item.command}`}</span>
          <div className="text-gray-400">{item.result}</div>
        </div>
      ))}
    </div>
  );
};

export default CommandOutput;
