import styled from "styled-components";

function ColorButtonArea() {
  return (
    <ColorButtonContainer>
      <ColorTitle>배경 색</ColorTitle>
      <ColorButton>파스텔</ColorButton>
      <ColorButton>단색</ColorButton>
      <ColorButton>그라데이션</ColorButton>
    </ColorButtonContainer>
  );
}
const ColorButtonContainer = styled.div`
  min-width: 768px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const ColorTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-right: 98px;
`;
const ColorButton = styled.button`
  background-color: #337ccf;
  border: none;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
export default ColorButtonArea;
