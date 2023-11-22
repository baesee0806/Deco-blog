import styled from "styled-components";

interface ScreenProps {
  layoutValue: number;
  title: string;
  subtitle: string;
  category: string;
  screenColor: string;
}

function Screen({
  layoutValue,
  title,
  subtitle,
  category,
  screenColor,
}: ScreenProps) {
  return (
    <Container $screencolor={screenColor}>
      <Title>{title || "제목을 입력하세요"}</Title>
      {layoutValue === 2 ? null : <Line />}
      <Subtitle>
        {layoutValue === 2 ? "" : subtitle || "부제목을 입력하세요"}
      </Subtitle>
      <Classification>
        {layoutValue === 3 ? "" : category || "분류를 입력하세요"}
      </Classification>
    </Container>
  );
}

const Container = styled.div<{ $screencolor: string }>`
  width: 768px;
  height: 402px;
  background-color: ${(props) => props.$screencolor};
  margin-bottom: 30px;
`;
const Title = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
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
const Line = styled.hr`
  width: 204px;
  margin: 0 auto;
  border: 1px solid black;
`;

export default Screen;
