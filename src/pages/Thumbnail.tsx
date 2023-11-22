import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";
import Screen from "../components/thumbnail/Screen";

function Thumbnail() {
  return (
    <Container>
      <LayoutBtn />
      <Screen />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

export default Thumbnail;
