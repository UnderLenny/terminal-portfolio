import Header from "./Header";
import TextArea from "./TextArea";

function Terminal() {
  return (
    <div className={"border border-black rounded-md mx-[150px] my-[100px]"}>
      <Header />
      <TextArea />
    </div>
  );
}

export default Terminal;
