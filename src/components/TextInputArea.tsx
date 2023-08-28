import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  firstInputState,
  secondInputState,
  thirdInputState,
} from "../recoil/atoms";
function TextInputArea() {
  const [firstInput, setFirstInput] = useRecoilState<string>(firstInputState);
  const [secondInput, setSecondInput] =
    useRecoilState<string>(secondInputState);
  const [thirdInput, setThirdInput] = useRecoilState<string>(thirdInputState);
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setState(e.target.value);
  };
  return (
    <TextInputcontainer>
      <FirstInput
        type="text"
        placeholder="-Text를 입력하세요"
        value={firstInput}
        onChange={(e) => {
          inputHandler(e, setFirstInput);
        }}
      />
      <SecondInput
        type="text"
        placeholder="-Text를 입력하세요"
        value={secondInput}
        onChange={(e) => {
          inputHandler(e, setSecondInput);
        }}
      />
      <ThirdInput
        type="text"
        placeholder="-Text를 입력하세요"
        value={thirdInput}
        onChange={(e) => {
          inputHandler(e, setThirdInput);
        }}
      />
    </TextInputcontainer>
  );
}
const TextInputcontainer = styled.div`
  width: 768px;
  height: 52px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const FirstInput = styled.input`
  width: 225px;
  height: 38px;
  padding-left: 14px;
  margin-right: 17.5px;
  border-radius: 10px;
`;
const SecondInput = styled.input`
  width: 225px;
  height: 38px;
  padding-left: 14px;
  margin-right: 17.5px;
  border-radius: 10px;
`;
const ThirdInput = styled.input`
  width: 225px;
  height: 38px;
  padding-left: 14px;
  border-radius: 10px;
`;
export default TextInputArea;
