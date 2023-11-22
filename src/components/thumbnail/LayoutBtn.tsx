import styled from "styled-components";

interface LayoutBtnProps {
  layoutValue: number;
  setLayoutValue: (value: number) => void;
}

function LayoutBtn({ layoutValue, setLayoutValue }: LayoutBtnProps) {
  return (
    <Container>
      <LayoutButton
        $active={layoutValue === 1 ? "true" : "false"}
        onClick={() => setLayoutValue(1)}
      >
        Layout 1
      </LayoutButton>
      <LayoutButton
        $active={layoutValue === 2 ? "true" : "false"}
        onClick={() => setLayoutValue(2)}
      >
        Layout 2
      </LayoutButton>
      <LayoutButton
        $active={layoutValue === 3 ? "true" : "false"}
        onClick={() => setLayoutValue(3)}
      >
        Layout 3
      </LayoutButton>
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
const LayoutButton = styled.button<{ $active: string }>`
  width: 150px;
  height: 47px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.$active === "true" ? "#ffffff" : "#000000")};
  background-color: ${(props) =>
    props.$active === "true" ? "#BEADFA" : "#ffffff"};
`;

export default LayoutBtn;
