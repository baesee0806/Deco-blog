import styled from "styled-components";
import TextInputArea from "./components/TextInputArea";
import TypeButtonArea from "./components/TypeButtonArea";

function App() {
  return (
    <Container>
      <ScreenBox>
        <Screen>Screen area</Screen>
        <TextInputArea />
        <TypeButtonArea />
        <div>Thumbnail background color area</div>
        <div>file upload area</div>
      </ScreenBox>
    </Container>
  );
}
const Container = styled.div`
  width: 1200px;
  height: 80vh;
  margin: 80px auto 0 auto;
`;
const ScreenBox = styled.div`
  width: 768px;
  height: 402.083px;
  margin: 0 auto;
`;
const Screen = styled.div`
  width: 768px;
  height: 402.083px;
  border: 1px solid black;
`;
export default App;
