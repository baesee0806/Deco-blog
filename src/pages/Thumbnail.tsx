import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";
import Screen from "../components/thumbnail/Screen";
import TextInput from "../components/thumbnail/TextInput";
import OptionBtn from "../components/thumbnail/OptionBtn";
import { useState } from "react";
import { useInput } from "../hooks/useInput";

function Thumbnail() {
  const [layoutValue, setLayoutValue] = useState(1);
  const {
    title,
    subtitle,
    category,
    titleOnChange,
    subtitleOnChange,
    categoryOnChange,
  } = useInput();

  return (
    <Container>
      <LayoutBtn layoutValue={layoutValue} setLayoutValue={setLayoutValue} />
      <Screen title={title} subtitle={subtitle} category={category} />
      <TextInput
        layoutValue={layoutValue}
        title={title}
        subtitle={subtitle}
        category={category}
        titleOnChange={titleOnChange}
        subtitleOnChange={subtitleOnChange}
        categoryOnChange={categoryOnChange}
      />
      <OptionBtn />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

export default Thumbnail;
