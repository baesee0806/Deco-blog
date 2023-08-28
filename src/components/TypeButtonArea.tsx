import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { typeState } from "../recoil/atoms";

function TypeButtonArea() {
  const setTypeBtnState = useSetRecoilState(typeState);
  const allTypeBtn = (type: number): void => {
    setTypeBtnState(type);
  };
  return (
    <TypeButtonContainer>
      <TypeTitle>썸네일 타입</TypeTitle>
      <TypeButton
        onClick={() => {
          allTypeBtn(1);
        }}
      >
        제목 / 부제목 / 분류
      </TypeButton>
      <TypeButton
        onClick={() => {
          allTypeBtn(2);
        }}
      >
        제목 / 부제목
      </TypeButton>
      <TypeButton
        onClick={() => {
          allTypeBtn(3);
        }}
      >
        제목
      </TypeButton>
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
const TypeButton = styled.button`
  background-color: #337ccf;
  border: none;
  border-radius: 10px;
  width: 190px;
  height: 38px;
`;
export default TypeButtonArea;
