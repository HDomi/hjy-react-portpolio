import "./Typing.scss";
import { useEffect, useState } from "react";

export const Typing = (text: string) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, text]);

  return <div className="typing-text">{`${typedText}`}</div>;
};

export default Typing;
