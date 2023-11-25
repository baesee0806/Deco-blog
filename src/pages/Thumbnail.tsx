import React, { memo } from "react";
import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";
import Screen from "../components/thumbnail/Screen";
import TextInput from "../components/thumbnail/TextInput";
import OptionBtn from "../components/thumbnail/OptionBtn";
import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { useRandomColor } from "../hooks/useRandomColor";
import { useTextColor } from "../hooks/useTextColor";

function Thumbnail() {
  const [layoutValue, setLayoutValue] = useState(1);

  const {
    title,
    subtitle,
    category,
    titleOnChange,
    subtitleOnChange,
    categoryOnChange,
    initText,
  } = useInput();

  const { screenColor, onChangeScreenColor } = useRandomColor();

  const { textColor, textColorChange } = useTextColor();
  console.log(textColor);

  return (
    <Container>
      <LayoutBtn layoutValue={layoutValue} setLayoutValue={setLayoutValue} />
      <Screen
        layoutValue={layoutValue}
        title={title}
        subtitle={subtitle}
        category={category}
        screenColor={screenColor}
        textColor={textColor}
      />
      <TextInput
        layoutValue={layoutValue}
        title={title}
        subtitle={subtitle}
        category={category}
        titleOnChange={titleOnChange}
        subtitleOnChange={subtitleOnChange}
        categoryOnChange={categoryOnChange}
      />
      <OptionBtn
        onChangeScreenColor={onChangeScreenColor}
        textColorChange={textColorChange}
        initText={initText}
      />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

const MemoizedThumbnail = memo(Thumbnail);

export default MemoizedThumbnail;
