import styled from "styled-components";

function LayoutBtn() {
  return (
    <Container>
      <LayoutButton>Layout 1</LayoutButton>
      <LayoutButton>Layout 2</LayoutButton>
      <LayoutButton>Layout 3</LayoutButton>
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const LayoutButton = styled.button`
  width: 150px;
  height: 47px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
`;
export default LayoutBtn;
