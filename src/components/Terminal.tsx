import Header from "./Header";
import TextArea from "./TextArea";

const Terminal = () => {
  return (
    <div className="rounded-md mx-auto 2xl:my-[250px] lg:my-[150px] md:my-[100px] sm:my-[50px] max-w-9xl sm:mx-[50px] md:mx-[100px] lg:mx-[150px] ">
      <Header />
      <TextArea />
    </div>
  );
}

export default Terminal;
