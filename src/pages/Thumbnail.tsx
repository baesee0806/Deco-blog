import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";
import Screen from "../components/thumbnail/Screen";
import TextInput from "../components/thumbnail/TextInput";
import OptionBtn from "../components/thumbnail/OptionBtn";

function Thumbnail() {
  return (
    <Container>
      <LayoutBtn />
      <Screen />
      <TextInput />
      <OptionBtn />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

export default Thumbnail;
