import styled from "styled-components";
import TextInputArea from "./components/TextInputArea";
import TypeButtonArea from "./components/TypeButtonArea";
import ColorButtonArea from "./components/ColorButtonArea";
import Screen from "./components/Screen";

function App() {
  return (
    <Container>
      <ScreenBox>
        <Screen />
        <TextInputArea />
        <TypeButtonArea />
        <ColorButtonArea />
        <ButtonBox>
          <InitButton>초기화</InitButton>
          <UploadButton>파일 업로드</UploadButton>
        </ButtonBox>
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

const ButtonBox = styled.div`
  min-width: 768px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InitButton = styled.button`
  background-color: grey;
  border: none;
  border-radius: 10px;
  width: 190px;
  height: 38px;
  margin-right: 20px;
`;
const UploadButton = styled.button`
  background-color: grey;
  border: none;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
export default App;
