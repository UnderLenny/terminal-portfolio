import Header from "./Header";
import TextArea from "./TextArea";

function Terminal() {
  return (
    <div className="rounded-md mx-auto my-[250px] max-w-9xl sm:mx-[50px] md:mx-[100px] lg:mx-[200px]">
      <Header />
      <TextArea />
    </div>
  );
}

export default Terminal;
