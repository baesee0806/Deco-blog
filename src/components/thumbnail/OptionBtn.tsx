import styled from "styled-components";

function OptionBtn() {
  return (
    <Container>
      <OptionButton>랜덤 색상</OptionButton>
      <OptionButton>글자 색상</OptionButton>
      <OptionButton>초기화</OptionButton>
      <OptionButton>이미지 저장</OptionButton>
    </Container>
  );
}

const Container = styled.div`
  height: 47px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const OptionButton = styled.button`
  width: 150px;
  height: 47px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
`;

export default OptionBtn;
