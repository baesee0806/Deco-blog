import { useState } from "react";
import randomColor from "../apis/randomColor";

export const useRandomColor = () => {
  const [screenColor, setScreenColor] = useState("rgb(255, 228, 196)");

  const onChangeScreenColor = () => {
    setScreenColor(randomColor());
  };

  return { screenColor, onChangeScreenColor };
};
