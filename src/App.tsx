import styled from "styled-components";
import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}
const Layout = styled.div`
  width: 1280px;
`;

export default App;
