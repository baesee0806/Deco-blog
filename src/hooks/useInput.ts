import { useState, useCallback } from "react";

export const useInput = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");

  const titleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const subtitleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubtitle(e.target.value);
    },
    []
  );

  const categoryOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategory(e.target.value);
    },
    []
  );

  return {
    title,
    subtitle,
    category,
    titleOnChange,
    subtitleOnChange,
    categoryOnChange,
  };
};
