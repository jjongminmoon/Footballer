import styled from "@emotion/styled";
import Navbar from "./components/navbar/Navbar";
import PageNavigator from "./PageNavigator";
import Footer from "./components/ui/Footer";
import ScrollToUp from "./util/ScrollToUp";
import { AuthProvider } from "./context/AuthProvider";
import { UserProvider } from "./context/UserProvider";
import { TeamProvider } from "./context/TeamProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <TeamProvider>
            <Header>
              <Navbar />
            </Header>
            <Main>
              <PageNavigator />
            </Main>
          </TeamProvider>
        </UserProvider>
      </AuthProvider>
      <Footer />
      <ScrollToUp />
    </>
  );
}

export default App;

const Header = styled.header`
  max-width: 1024px;
  margin: 0 auto;
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
