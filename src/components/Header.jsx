const Header = () => {
  return (
    <div className="text-gray-300 max-w-4xl mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-slate-800 p-2 flex items-center justify-between">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <h1 className="text-white font-bold tracking-widest text-center flex-grow text-[12px] sm:text-[12px] lg:text-[20px] 2xl:text-[20px]">
        📁leonidGevorgyan/portfolio
      </h1>
    </div>
  );
};

export default Header;
