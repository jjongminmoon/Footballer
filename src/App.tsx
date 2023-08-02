import styled from "@emotion/styled";
import Navbar from "./components/navbar/Navbar";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <PageNavigator />
      </Main>
    </>
  );
}

export default App;

const Header = styled.header`
  max-width: 1024px;
  margin: 0 auto;
`;

const Main = styled.main`
  margin: 0 auto;
`;
