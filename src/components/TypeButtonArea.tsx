import { useRecoilState } from "recoil";
import styled from "styled-components";
import { typeState } from "../recoil/atoms";

function TypeButtonArea() {
  const [typeBtnState, setTypeBtnState] = useRecoilState(typeState);
  const allTypeBtn = (type: number): void => {
    setTypeBtnState(type);
  };
  return (
    <TypeButtonContainer>
      <TypeTitle>썸네일 타입</TypeTitle>
      <FirstTypeButton
        onClick={() => {
          allTypeBtn(1);
        }}
        hoverState={typeBtnState}
      >
        제목 / 부제목 / 분류
      </FirstTypeButton>
      <SecondTypeButton
        onClick={() => {
          allTypeBtn(2);
        }}
        hoverState={typeBtnState}
      >
        제목 / 부제목
      </SecondTypeButton>
      <ThirdTypeButton
        onClick={() => {
          allTypeBtn(3);
        }}
        hoverState={typeBtnState}
      >
        제목 / 분류
      </ThirdTypeButton>
    </TypeButtonContainer>
  );
}
const TypeButtonContainer = styled.div`
  min-width: 768px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const TypeTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-right: 60px;
`;
const FirstTypeButton = styled.button<{ hoverState: number }>`
  background-color: ${(props) => (props.hoverState === 1 ? "#337ccf" : "#fff")};
  border: 1px solid #337ccf;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
const SecondTypeButton = styled.button<{ hoverState: number }>`
  background-color: ${(props) => (props.hoverState === 2 ? "#337ccf" : "#fff")};
  border: 1px solid #337ccf;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
const ThirdTypeButton = styled.button<{ hoverState: number }>`
  background-color: ${(props) => (props.hoverState === 3 ? "#337ccf" : "#fff")};
  border: 1px solid #337ccf;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
export default TypeButtonArea;
