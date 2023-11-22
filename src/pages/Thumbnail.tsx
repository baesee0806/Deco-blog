import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";
import Screen from "../components/thumbnail/Screen";
import TextInput from "../components/thumbnail/TextInput";
import OptionBtn from "../components/thumbnail/OptionBtn";
import { useState } from "react";

function Thumbnail() {
  const [layoutValue, setLayoutValue] = useState(1);

  return (
    <Container>
      <LayoutBtn layoutValue={layoutValue} setLayoutValue={setLayoutValue} />
      <Screen />
      <TextInput layoutValue={layoutValue} />
      <OptionBtn />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

export default Thumbnail;
