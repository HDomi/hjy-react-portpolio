import "./Typing.scss";
import { useEffect, useState } from "react";

export const Typing = (text: string) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <div className="typing-text">{typedText}</div>;
};

export default Typing;
