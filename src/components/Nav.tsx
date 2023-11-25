import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  const pathName = window.location.pathname;

  return (
    <Container>
      <LinkContainer>
        <Logo to={"/"}>Deco Blog</Logo>
        <RouteLink to={"/thumbnail"}>썸네일 메이커</RouteLink>
        <RouteLink to={"/decoNotion"}>Deco Notion</RouteLink>
      </LinkContainer>
    </Container>
  );
}
const Container = styled.nav`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;
const LinkContainer = styled.div`
  width: 550px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  text-decoration-line: none;
  color: black;
`;
const RouteLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration-line: none;
  color: black;
`;

export default Nav;
