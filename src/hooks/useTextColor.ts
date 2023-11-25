import { useCallback, useState } from "react";

export const useTextColor = () => {
  const [textColor, setTextColor] = useState("black");
  const textColorChange = useCallback(() => {
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  }, []);
  return { textColor, textColorChange };
};
