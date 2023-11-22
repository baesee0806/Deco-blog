import styled from "styled-components";

interface OptionBtnProps {
  onChangeScreenColor: () => void;
}

function OptionBtn({ onChangeScreenColor }: OptionBtnProps) {
  return (
    <Container>
      <OptionButton onClick={onChangeScreenColor}>랜덤 색상</OptionButton>
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
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #beadfa;
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }
`;

export default OptionBtn;
