// import React from "react";
import { useState, useEffect } from "react";

export default function HackText({ state }) {
  const arr = ["a", "1", "&", "2", "e", "f", "3", "4", "5", "6", "$", "7", "8", "o", "9", "%", "r", "*", "0", "u", "v", "w", "x", "y", "z"];

  const text = state.content;
  const [displayText, setDisplayText] = useState(text);

  const matrixText = (i = 0) => {
    if (i < 25) {
      setTimeout(() => {
        const random = () => Math.floor(Math.random() * arr.length);

        const final = () => {
          const randomText = text.split("").map((item) => {
            if (item === " ") {
              return item;
            }
            return (item = arr[random()]);
          });
          return randomText.join("");
        };

        setDisplayText(final());

        matrixText(i + 1);
      }, 28);
    } else {
      setDisplayText(text);
    }
  };

  useEffect(() => {
    matrixText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayText;
}
