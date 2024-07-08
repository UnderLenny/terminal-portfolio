import Header from "./Header";
import TextArea from "./TextArea";

function Terminal() {
  return (
    <div className={" rounded-md mx-[150px] my-[230px]"}>
      <Header />
      <TextArea />
    </div>
  );
}

export default Terminal;
