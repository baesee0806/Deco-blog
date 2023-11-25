import styled from "styled-components";

interface ScreenProps {
  layoutValue: number;
  title: string;
  subtitle: string;
  category: string;
  screenColor: string;
  textColor: string;
}

function Screen({
  layoutValue,
  title,
  subtitle,
  category,
  screenColor,
  textColor,
}: ScreenProps) {
  return (
    <Container id="screen" $screencolor={screenColor} $textColor={textColor}>
      <Title>{title || "제목을 입력하세요"}</Title>
      {layoutValue === 2 ? null : <Line $textColor={textColor} />}
      <Subtitle>
        {layoutValue === 2 ? "" : subtitle || "부제목을 입력하세요"}
      </Subtitle>
      <Classification>
        {layoutValue === 3 ? "" : category || "분류를 입력하세요"}
      </Classification>
    </Container>
  );
}

const Container = styled.div<{ $screencolor: string; $textColor: string }>`
  width: 768px;
  height: 402px;
  background-color: ${(props) => props.$screencolor};
  margin-bottom: 30px;
  color: ${(props) => props.$textColor};
`;
const Title = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  padding-top: 100px;
`;
const Subtitle = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: top;
  font-size: 24px;
`;
const Classification = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
const Line = styled.hr<{ $textColor: string }>`
  width: 204px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.$textColor};
`;

export default Screen;
