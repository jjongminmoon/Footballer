import styled from "@emotion/styled";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Header>
      <Navbar />
    </Header>
  );
}

export default App;

const Header = styled.header`
  max-width: 1024px;
  margin: 0 auto;
`;
