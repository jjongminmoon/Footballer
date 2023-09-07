import styled from "@emotion/styled";
import Navbar from "./components/navbar/Navbar";
import PageNavigator from "./PageNavigator";
import Footer from "./components/ui/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthProvider";
import { UserProvider } from "./context/UserProvider";
import { TeamProvider } from "./context/TeamProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <TeamProvider>
            <Header>
              <Navbar />
            </Header>
            <Main>
              <PageNavigator />
            </Main>
            <Footer />
          </TeamProvider>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
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
