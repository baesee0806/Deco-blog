import styled from "styled-components";
function TextInputArea() {
  return (
    <TextInputcontainer>
      <FirstInput type="text" placeholder="-Text를 입력하세요" />
      <SecondInput type="text" placeholder="-Text를 입력하세요" />
      <ThirdInput type="text" placeholder="-Text를 입력하세요" />
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
