import styled from "styled-components";
import Router from "./routes/Router";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}
const Layout = styled.div`
  width: 1200px;
  height: 80vh;
  margin: 80px auto 0 auto;
`;

export default App;
