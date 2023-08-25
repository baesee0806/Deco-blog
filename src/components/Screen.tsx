import styled from "styled-components";

function Screen() {
  return (
    <ScreenContainer>
      <Title>제목</Title>
      <SubTitle>부제목</SubTitle>
      <Category>분류</Category>
    </ScreenContainer>
  );
}
const ScreenContainer = styled.div`
  width: 768px;
  height: 402.083px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
  height: 60%;
  font-size: 40px;
  border-bottom: 1px solid black;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 10%;
  font-size: 20px;
`;
const Category = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40%;
  font-size: 20px;
  margin-bottom: 20px;
`;
export default Screen;
