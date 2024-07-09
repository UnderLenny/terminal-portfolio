import { useEffect } from "react";

function useAutoScroll(element) {
  const scrollToBottom = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);
}

export default useAutoScroll;
