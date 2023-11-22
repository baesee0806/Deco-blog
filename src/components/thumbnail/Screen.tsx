import styled from "styled-components";

interface ScreenProps {
  title: string;
  subtitle: string;
  category: string;
}

function Screen({ title, subtitle, category }: ScreenProps) {
  return (
    <Container>
      <Title>{title || "제목을 입력하세요"}</Title>
      <Line />
      <Subtitle>{subtitle || "부제목을 입력하세요"}</Subtitle>
      <Classification>{category || "분류를 입력하세요"}</Classification>
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  height: 402px;
  background-color: bisque;
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
