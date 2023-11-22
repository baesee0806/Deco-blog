import styled from "styled-components";
import LayoutBtn from "../components/thumbnail/LayoutBtn";

function Thumbnail() {
  return (
    <Container>
      <LayoutBtn />
    </Container>
  );
}

const Container = styled.main`
  width: 768px;
  margin: 25px auto 0 auto;
`;

export default Thumbnail;
