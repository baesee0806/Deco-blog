import styled from "styled-components";
import { useState } from "react";

function TextInput({ layoutValue }: { layoutValue: number }) {
  const [isTitleActive, setTitleActive] = useState(false);
  const [isSubtitleActive, setSubtitleActive] = useState(false);
  const [isCategoryActive, setCategoryActive] = useState(false);

  const handleFocus = (inputId: string) => {
    if (inputId === "title") {
      setTitleActive(true);
    } else if (inputId === "subtitle") {
      setSubtitleActive(true);
    } else if (inputId === "category") {
      setCategoryActive(true);
    }
  };

  const handleBlur = (inputId: string) => {
    if (inputId === "title") {
      setTitleActive(false);
    } else if (inputId === "subtitle") {
      setSubtitleActive(false);
    } else if (inputId === "category") {
      setCategoryActive(false);
    }
  };

  return (
    <>
      <InputBox>
        <InputLabel $active={isTitleActive.toString()}>제목</InputLabel>
        <Input
          type="text"
          onFocus={() => handleFocus("title")}
          onBlur={() => handleBlur("title")}
        />
      </InputBox>
      {layoutValue === 2 ? null : (
        <InputBox>
          <InputLabel $active={isSubtitleActive.toString()}>부제목</InputLabel>
          <Input
            type="text"
            onFocus={() => handleFocus("subtitle")}
            onBlur={() => handleBlur("subtitle")}
          />
        </InputBox>
      )}
      {layoutValue === 3 ? null : (
        <InputBox>
          <InputLabel $active={isCategoryActive.toString()}>분류</InputLabel>
          <Input
            type="text"
            onFocus={() => handleFocus("category")}
            onBlur={() => handleBlur("category")}
          />
        </InputBox>
      )}
    </>
  );
}

const InputBox = styled.div`
  height: 96px;
  margin-bottom: 30px;
`;
const InputLabel = styled.div<{ $active: string }>`
  font-size: 24px;
  color: ${(props) => (props.$active === "true" ? "#ff0000" : "#828282")};
  transition: color 0.3s ease-in-out;
`;
const Input = styled.input`
  width: 768px;
  height: 48px;
  font-size: 24px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
`;
export default TextInput;
